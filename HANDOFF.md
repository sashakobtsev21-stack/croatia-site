# HANDOFF — croatia-site

> Снимок «где остановились» для следующей сессии. Обновляется после каждой доработки.

**Дата:** 2026-06-22 · **Ветка:** `main` · **Сборка:** 47 страниц (после удаления uk) · `check`/`build`/`test`/`test:links` (2272 ссылки)/`lint` — зелёные.

## Где остановились
**Удалён украинский язык (uk) — 2026-06-22 (решение владельца).** Сайт стал 2-язычным: **en** (по умолчанию, корень) + **ru** (`/ru/`). Удалены `src/pages/uk/`, контент `*/uk/`, словарь `i18n/uk.ts`; `LANGS=['ru','en']`; из кода (i18n, BaseLayout, Header/Footer/LangSwitcher/RatesBar, все слои, 404) убраны uk-ветки. hreflang теперь en↔ru + x-default=en; sitemap-locales `{en,ru}`; `check-parity` требует пару **en+ru**. В `public/_redirects` добавлен `/uk/* /:splat 301` (существующие слаг-редиректы и `/en/*` сохранены). Гейты зелёные; в dist нет `/uk/`-страниц и `hreflang="uk"`. Доки синхронизированы (CLAUDE/SPEC/CONTENT_GUIDE/PROGRESS/HANDOFF).

_Ранее (R4: контент по KALENDAR, Неделя 1):_ опубликованы две статьи-города **Загреб** (`zagreb-travel-guide`, 15 фото) и **Дубровник** (`dubrovnik-travel-guide`, 11 фото) + первый батч `/news` (2026-06-22, 2 новости): `split-airport-ferry-crowds-june-2026` (транспорт — Сплит 100 000+ пассажиров, доп. рейсы Jadrolinija) и `inmusic-festival-zagreb-2026` (события — INmusic на Яруне 22–24.06.2026, Jack White/Gorillaz/Kings of Leon; перелинк на свежий `/cities/zagreb-travel-guide/`). Факты верифицированы по источникам текущего года (TCN 20.06.2026; офиц. сайт INmusic). В репо **3 статьи-гайда + 2 новости** (теперь пары en/ru — uk-версии удалены). Следующее по KALENDAR: **Вс 28.06 — маршрут island hopping** (Split→Hvar→Korčula→Dubrovnik, routes).

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
