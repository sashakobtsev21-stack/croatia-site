/**
 * live-data.js — клиентский слой блока «Сейчас в Хорватии» (§8.4, Фаза 6).
 *
 * Дотягивает свежую погоду/море поверх build-time снапшота. Принципы:
 *  - один fetch на загрузку (НЕ polling, §15/правило 8 — без фоновых таймеров);
 *  - кэш в localStorage на 30 мин → повторный заход не дёргает сеть;
 *  - любой сбой источника → значение не трогаем, остаётся снапшот из HTML;
 *  - источники те же, что в build (src/lib/liveSnapshot.ts) — держать синхронно.
 */
(() => {
  'use strict';
  const root = document.querySelector('[data-live]');
  if (!root) return;

  const AIR_URL =
    'https://api.open-meteo.com/v1/forecast?latitude=45.8150,43.5081,42.6507&longitude=15.9819,16.4402,18.0944&current=temperature_2m';
  const SEA_URL =
    'https://marine-api.open-meteo.com/v1/marine?latitude=43.49&longitude=16.40&current=sea_surface_temperature';
  const CACHE_KEY = 'cg-live-v1';
  const TTL = 30 * 60 * 1000; // 30 минут

  const set = (key, val) => {
    if (val == null) return; // нет свежего значения → оставляем снапшот
    const el = root.querySelector('[data-live="' + key + '"]');
    if (el) el.textContent = val;
  };
  const fmtT = (n) => (typeof n === 'number' ? Math.round(n) + '°' : null);

  function render(d) {
    if (!d) return;
    set('air-zagreb', fmtT(d.air && d.air.zagreb));
    set('air-split', fmtT(d.air && d.air.split));
    set('air-dubrovnik', fmtT(d.air && d.air.dubrovnik));
    set('sea', fmtT(d.sea));
    const u = root.querySelector('[data-live="updated"]');
    if (u) {
      try {
        u.textContent = new Intl.DateTimeFormat(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date());
      } catch {
        /* оставляем build-time отметку */
      }
    }
  }

  async function jget(url) {
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 6000);
      const res = await fetch(url, { signal: ctl.signal });
      clearTimeout(timer);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  // Свежий кэш → рисуем из него и не трогаем сеть.
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const c = JSON.parse(raw);
      if (c && c.t && Date.now() - c.t < TTL && c.d) {
        render(c.d);
        return;
      }
    }
  } catch {
    /* localStorage недоступен — просто идём в сеть */
  }

  const runFetch = async () => {
    const [air, sea] = await Promise.all([jget(AIR_URL), jget(SEA_URL)]);
    const temp = (x) =>
      x && x.current && typeof x.current.temperature_2m === 'number'
        ? x.current.temperature_2m
        : null;
    const airArr = Array.isArray(air) ? air : [];
    const d = {
      air: { zagreb: temp(airArr[0]), split: temp(airArr[1]), dubrovnik: temp(airArr[2]) },
      sea:
        sea && sea.current && typeof sea.current.sea_surface_temperature === 'number'
          ? sea.current.sea_surface_temperature
          : null,
    };
    render(d);
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d }));
    } catch {
      /* квота/приватный режим — не критично */
    }
  };
  // Сеть — вне критического пути: дёргаем источники в idle, чтобы не конкурировать
  // с отрисовкой/LCP. Снапшот из HTML виден сразу; это лишь догрузка.
  if ('requestIdleCallback' in window) requestIdleCallback(() => runFetch(), { timeout: 3000 });
  else setTimeout(runFetch, 1200);
})();
