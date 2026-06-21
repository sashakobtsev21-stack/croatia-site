/**
 * Снапшот «живых» данных для главной (§8.4, Фаза 6): погода (Загреб/Сплит/
 * Дубровник) и температура моря Адриатики (у Сплита). Только погода — без курсов
 * валют (Хорватия в еврозоне, решение по live-data: показываем только погоду).
 *
 * Это BUILD-TIME слой гибрида: при сборке тянем данные и зашиваем в HTML
 * (мгновенно видно, 0 CLS, работает без JS). Клиент потом обновляет свежими
 * значениями (/js/live-data.js). Любой сбой источника → null → в UI «—», сборка
 * не падает (try/catch + таймаут). Кэш на уровне модуля: один fetch на сборку,
 * даже если компонент рендерится на нескольких страницах (en/ru/uk).
 *
 * Источник (без ключей, CORS ok): open-meteo (погода/море).
 * Цифры не выдумываем (CLAUDE правило 4): нет данных — поле пустое.
 */

export interface LiveSnapshot {
  air: { zagreb: number | null; split: number | null; dubrovnik: number | null };
  sea: number | null;
}

const AIR_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=45.8150,43.5081,42.6507&longitude=15.9819,16.4402,18.0944&current=temperature_2m';
const SEA_URL =
  'https://marine-api.open-meteo.com/v1/marine?latitude=43.49&longitude=16.40&current=sea_surface_temperature';

async function jget(url: string, ms = 6000): Promise<unknown> {
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), ms);
    const res = await fetch(url, { signal: ctl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

const temp = (loc: unknown): number | null => {
  const c = (loc as { current?: { temperature_2m?: unknown } } | null)?.current?.temperature_2m;
  return typeof c === 'number' ? c : null;
};

let cached: Promise<LiveSnapshot> | null = null;

export function getLiveSnapshot(): Promise<LiveSnapshot> {
  if (!cached) cached = build();
  return cached;
}

async function build(): Promise<LiveSnapshot> {
  const [air, sea] = await Promise.all([jget(AIR_URL), jget(SEA_URL)]);

  const airArr = Array.isArray(air) ? air : [];
  const seaVal = (sea as { current?: { sea_surface_temperature?: unknown } } | null)?.current
    ?.sea_surface_temperature;

  return {
    air: { zagreb: temp(airArr[0]), split: temp(airArr[1]), dubrovnik: temp(airArr[2]) },
    sea: typeof seaVal === 'number' ? seaVal : null,
  };
}
