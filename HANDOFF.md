# HANDOFF — croatia-site

> Снимок «где остановились» для следующей сессии. Обновляется после каждой доработки.

**Дата:** 2026-06-22 · **Ветка:** `main` · **Сборка:** 49 страниц · `check`/`build`/`test`/`test:links` (2280 ссылок)/`lint` — зелёные, `qa`=GO.

## Где остановились
**KALENDAR Неделя 2 — статья-город Сплит (опубл. 2026-06-22).** Опубликована пара `split-travel-guide` (en ведущий ~1707 слов + ru, паритет), `category=cities` → `/cities/split-travel-guide/` и `/ru/cities/split-travel-guide/`. 12 уникальных фото CC с Wikimedia Commons (cover + 8 инлайн-figure + 3 gallery), webp ≤200КБ, отобраны глазами, `coverCredit` проставлен. Содержание: дворец Диоклетиана (UNESCO, ворота, субструкции/«Игра престолов»), Перистиль + собор Св. Домния + колокольня, Рива + рынки Пазар/Рибарница, холм Марьян + пляж Бачвице, дейтрипы паромом Jadrolinija (Хвар/Брач–Златни-Рат/Вис/Трогир/Крка), где жить, аэропорт SPU (Каштела ~24 км) + паромный хаб, где поесть, практика. `geo`/`hotelWidget:true`/`accessFrom`/`visit`; AffiliateBox `trip-hotels`+`trip-tours` через `/go/`. Перелинк: хаб `/cities/` + Загреб + Дубровник + свежая новость о паромах Сплита + хабы `/transport/ /car-rental/ /planning/ /routes/ /food/`. **Сплит добавлен 3-м пиком в `showcasePicks` главной** (чип Split→Сплит локализован в CITY_RU). Гейты зелёные, `qa`=GO. Добор перелинковки: при выходе `day-trips-from-split`, `split-to-hvar-ferry`, `10-day-croatia-itinerary`, `hvar-island-guide`, `krka-national-park` заменить ссылки-на-хабы на прямые (en/ru).

_Ранее (2026-06-22): витрина главной заполнена городами._ `showcasePicks` в `src/layouts/HomePage.astro` ссылался на несуществующий контент → лента была пустой. Заполнен опубликованными городами (`zagreb-travel-guide`, `dubrovnik-travel-guide`, теперь + `split-travel-guide`, `category=cities`); чип города локализован для ru. Тип массива расширен до union, чтобы спящие ветки restaurant/route оставались валидными. Витрина показывается на `/` и `/ru/`; LangSwitcher — ровно en+ru.

**Удалён украинский язык (uk) — 2026-06-22 (решение владельца).** Сайт стал 2-язычным: **en** (по умолчанию, корень) + **ru** (`/ru/`). Удалены `src/pages/uk/`, контент `*/uk/`, словарь `i18n/uk.ts`; `LANGS=['ru','en']`; из кода (i18n, BaseLayout, Header/Footer/LangSwitcher/RatesBar, все слои, 404) убраны uk-ветки. hreflang теперь en↔ru + x-default=en; sitemap-locales `{en,ru}`; `check-parity` требует пару **en+ru**. В `public/_redirects` добавлен `/uk/* /:splat 301` (существующие слаг-редиректы и `/en/*` сохранены). Гейты зелёные; в dist нет `/uk/`-страниц и `hreflang="uk"`. Доки синхронизированы (CLAUDE/SPEC/CONTENT_GUIDE/PROGRESS/HANDOFF).

_Ранее (R4: контент по KALENDAR, Неделя 1):_ опубликованы две статьи-города **Загреб** (`zagreb-travel-guide`, 15 фото) и **Дубровник** (`dubrovnik-travel-guide`, 11 фото) + первый батч `/news` (2026-06-22, 2 новости): `split-airport-ferry-crowds-june-2026` (транспорт — Сплит 100 000+ пассажиров, доп. рейсы Jadrolinija) и `inmusic-festival-zagreb-2026` (события — INmusic на Яруне 22–24.06.2026, Jack White/Gorillaz/Kings of Leon; перелинк на свежий `/cities/zagreb-travel-guide/`). Факты верифицированы по источникам текущего года (TCN 20.06.2026; офиц. сайт INmusic). В репо **4 статьи-гайда + 2 новости** (пары en/ru). Следующее по KALENDAR: **Вс 28.06 — маршрут island hopping** (Split→Hvar→Korčula→Dubrovnik, routes) и **Пт 03.07 — Ровинь** (cities).

_Ранее (2026-06-22): завершён Этап 1 (тех-аудит, чистка грузинских следов, инфра-доки, стандарты, память, верификация `/news`); движок и запуск-инфраструктура готовы._

**Миграция URL-слагов (2026-06-22):** разделы переведены с русско-транслитных на английские слаги (единая EN-схема сети, эталон — Македония): `/attractions/ /cities/ /food/ /entertainment/ /routes/ /planning/ /transport/ /car-rental/ /insurance/ /relocation/ (+ /relocation/services/) /news/ /about/ /contact/`. Переименованы директории `src/pages` (+ ru-зеркала), enum категорий, i18n, все ссылки, frontmatter статьи, скрипты, sitemap-фильтр; 301-редиректы старых путей в `public/_redirects`. Гейты зелёные: `build` (58 стр.), `check` (0 ошибок), `test:links` (2765 ссылок, 0 битых), `test`, `lint`.

## Что в работе / на паузе
- **Контент** — идёт по KALENDAR (Неделя 1 начата статьёй Загреб).
- **Добор перелинковки Загреба:** ссылки на 7-day-itinerary и best-time пока ведут на хабы `/routes/` и `/planning/` — заменить на прямые ссылки на статьи, когда те выйдут (неделя 2–3), в обоих языках (en/ru).
- **Открытые фиксы** — в `ROADMAP-FIX.md` (приоритезированы).

## Нужно от владельца
- Партнёрские ID/ссылки: **EKTA**-трекинг (Travelpayouts), **DiscoverCars** (авто), позже GetYourGuide/Viator.
- Настроить `www`-редирект в Cloudflare (CNAME `www` + redirect на apex).
- Решить: делать ли страницу политики конфиденциальности (для ссылки из cookie-баннера).
- Источник фактуры для `living-*` и личных цифр («моат»): бриф владельца или веб-первоисточники с пометкой «сверить при публикации».

## Ключевые точки входа
- Стратегия: `docs/STRATEGY.md`, `docs/CROATIA-ANALYSIS-2026-06-20.md`, план: `docs/CONTENT_PLAN.md`.
- Правила: `CLAUDE.md` (СТАНДАРТЫ + ПРАВИЛО ДИСЦИПЛИНЫ), `CONTENT_GUIDE.md`.
- Аудит: `AUDIT-2026-06-22.md`, ledger `AUDIT.md`. Фиксы: `ROADMAP-FIX.md`. Память: `docs/memory/MEMORY.md`.
- Архив движка-донора (НЕ актуально, балласт-образец): `docs/_georgia-reference/`.
