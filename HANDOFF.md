# HANDOFF — Croatia Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-30 · **Фаза:** R4 наполнение · **Статей:** ~27 (цель ~80) · **Сайт:** live (`croatiaguidebook.com`) · **Языки:** en/ru · **Последний коммит:** `d57ed52 publish(croatia): Plitvice Lakes from Zagreb or Split Without a Car (en+ru)` (+ docs-коммит следом)

## Где остановились
- Контент: последние опубликованные — **паром/Плитвице-кластер 30.06: `croatia-ferries-guide` (routes) + `zagreb-to-plitvice` (transport) + `plitvice-from-split` (routes) (3 пары en+ru, 5–6 фото каждая)**. До них — транспорт-кластер 29.06 (`getting-around-croatia` + `split-airport-to-city` + `split-to-dubrovnik-transport`). Полный лог — `PROGRESS.md`.
  - 30.06 заметки: статьи `category=routes` рендерятся коллекцией `articles` на `/routes/<slug>/` (НЕ коллекция `routes`, у неё обяз. days/distanceKm/stops). Перелинк-цели из KALENDAR разрешены к реальным: `plitvice-lakes-guide`→`plitvice-lakes-national-park`; `split-to-hvar-ferry` (дедуп-исключена)→`hvar-travel-guide`; `croatia-itinerary-without-car` (будущий слот 15.07, ещё нет)→`getting-around-croatia`/`zagreb-to-plitvice`. Цены билетов Плитвице 2026 — с офиц. np-plitvicka-jezera.hr (€40/€25/€15), «checked June 2026».
- **Восстановление после краша `/work` 29.06:** прогон оборвался с НЕзакоммиченной работой и NO-GO `qa` (6 frontmatter-полей сверх лимита: `description >155` ×6 + 2 ru-`title >60`). Подрезано → `qa`=GO, `test:links`=GO (5298 ссылок, 0 битых), перелинковка 100% (все 36 целей резолвятся). Опубликовано и закоммичено инкрементально.
- Календарь: слоты Вт 30.06 (3 паром/Плитвице-статьи) отмечены `[x] ОПУБЛИКОВАНО 2026-06-30`; до них Пн 29.06 (3 транспорт-статьи); остальные будущие даты = `○` к написанию; план до 31.07; темп 3/будний день; маршруты по Вс.
- Сеть: доки выровнены (ядро 12/12); дашборд `grafana/dashboard.html` актуален; `/work` публикует автономно при полной уверенности.

## Что дальше
- Темы из `KALENDAR.md` на ближайшие дни (релокация/MONEY-клин, транспорт, города). SEO-актуализация по GSC ~06.07.

## Блокеры владельца
- GSC: Request Indexing + sitemap. Партнёрки (Travelpayouts: DiscoverCars/GetYourGuide/Booking + EKTA). www-редирект `www.croatiaguidebook.com` (Cloudflare). Моат-решение; дисплей-реклама (рек.: старт без).

## Не ломать (уже работает)
- Механика новостей: раздел хранит 10 дней, блок на главной — 2 дня; `/news` = сбор → фильтр → превью → «ок» → публикация (не автопостинг).
- Партнёрки только через `/go/{partner}?c={slug}` (`rel="sponsored nofollow noopener"`); прямые URL запрещены; `partners.json` (`kwd=Croatia`); open-redirect закрыт.
- Языковая пара en+ru с общим slug (`check-parity`); enum категорий в `content.config.ts`; EN-слаги разделов (миграция 22.06) + 301-редиректы в `public/_redirects` — не удалять.
- Hero-ротация/OG (`og-default.jpg`, secure_url), HTTP→HTTPS 301 в Worker, витрина-крутилка (CSS-marquee).

## Команды
- Гейты перед коммитом: `npm run qa` (= `check`+`build`+`test`+`test:links`+`lint`, должен быть GO); `npm run test:links` — внутренние ссылки и `/go/`.
- Скаффолд: `npm run new -- <тип> <slug> --title "…"` (генерит en/ru + папку фото + DoD).
- Скиллы: `/work` (дирижёр дня), `/news`, `/add-content`, `/full-audit`.
