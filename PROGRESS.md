# PROGRESS — croatia-site

> Статус и роадмап-трекинг. Обновляется после каждой доработки (CLAUDE правило 9 / ПРАВИЛО ДИСЦИПЛИНЫ).
> Источник истины по стратегии — `docs/STRATEGY.md` + `docs/CROATIA-ANALYSIS-2026-06-20.md`. Аудит — `AUDIT.md` / `AUDIT-2026-06-22.md`. Отложенные фиксы — `ROADMAP-FIX.md`.

**Дата:** 2026-06-24 · **Фаза:** R4 (контент) — старт Недели 1 KALENDAR · **Сборка:** 59 страниц, `qa` = GO.

## Текущее состояние (по факту)
- **Контент:** 2 статьи — `croatia-digital-nomad-visa` (en/ru/uk, `category=relocation`) + **`zagreb-travel-guide` (en/ru/uk, `category=cities`, столица Загреб, 15 фото, опубликована 2026-06-24)**. Коллекции `routes` / `restaurants` / `services` — пока пусты (наполняются по KALENDAR). Модель: **город = статья `category=cities`** (английский слаг), отдельная коллекция `cities` для наполнения не используется (имя `goroda` из движка-донора не применяется).
- **URL-слаги разделов — английские (миграция 2026-06-22):** разделы приведены к единой EN-схеме сети (эталон — North Macedonia): `/attractions/` · `/cities/` · `/food/` · `/entertainment/` · `/routes/` · `/planning/` · `/transport/` · `/car-rental/` · `/insurance/` · `/relocation/` (+ `/relocation/services/`) · `/news/` · `/about/` · `/contact/`. Старые русско-транслитные пути (`/goroda/`, `/eda/`, `/marshruty/`, `/relokatsiya/uslugi/` и т.д.) — 301-редиректами в `public/_redirects` по всем трём языкам. Гейты после миграции: `build` 58 стр., `check`/`test:links` (2765 ссылок)/`test`/`lint` — зелёные.
- **Движок:** перемоделирован под Хорватию — таксономия/регионы, бренд, адриатический дизайн, i18n (en — корень, ru/uk), live-данные (только погода Загреб/Сплит/Дубровник + море, без FX), `partners.json` (`kwd=Croatia`), фавикон-шаховница, sitemap (i18n) + robots (`Disallow /go/`), `/go/`-воркер (whitelist + fallback, open-redirect закрыт).
- **Аналитика:** GA4 `G-MD4WT1JQ57` + Consent Mode v2 + cookie-баннер (en/ru/uk).
- **Деплой:** `croatiaguidebook.com` живой (Cloudflare Workers; HSTS/CSP/XFO, `_astro` immutable-кэш). GSC подключён. www — не настроен (`ROADMAP-FIX`).
- **Скиллы:** `/news` локализован под Хорватию (верифицировано 2026-06-22). `/add-content`, `/full-audit` — рабочие.

## Сделано (вехи)
- **Bootstrap + ремоделинг движка** под Хорватию (таксономия, бренд, дизайн, i18n, live-data, partners).
- **Запуск-инфраструктура:** домен + деплой + GSC + sitemap + GA4 (+ Consent Mode v2).
- **Этап 1 (2026-06-22):** тех-аудит (`AUDIT-2026-06-22.md`), чистка грузинских следов (SPEC §2/§4/§7/§16, CONTENT_GUIDE, add-content, en-translator, фавикон), инфра-доки (этот файл, HANDOFF/AUDIT/ROADMAP), стандарты + правило дисциплины (CLAUDE/CONTENT_GUIDE), проектная память, верификация `/news`.
- **Миграция URL-слагов на английские (2026-06-22):** все 13 разделов переименованы с русско-транслитных на английские (директории `src/pages/` + ru/uk зеркала, enum `CATEGORIES` в content.config.ts, i18n ru/uk/en + types.ts, все внутренние ссылки, frontmatter единственной статьи, `new-content.mjs`/`qa-*`, sitemap-фильтр в astro.config). 301-редиректы для всех старых путей (корень + /ru/ + /uk/) добавлены в `public/_redirects`. Контракт-доки (CLAUDE.md «город = `category=cities`», SPEC.md §7 дерево разделов + §11 enum + §16 таблица монетизации) обновлены.
- **KALENDAR Неделя 1, Ср 24.06 — статья-столица Загреб (2026-06-24):** опубликована тройка `zagreb-travel-guide` (en ведущий + ru/uk, паритет), `category=cities` → `/cities/zagreb-travel-guide/`. 15 фото (cover + 8 инлайн-figure + 6 gallery) — все CC/CC0 с Wikimedia Commons, webp ≤200КБ, отобраны глазами, `coverCredit` проставлен. EN ~1305 слов; структура: лид-ответ → сколько времени → Верхний город → собор+Долац → Нижний город+музеи → где жить → аэропорт→центр → где поесть → дальше от центра → перелинк. AffiliateBox `trip-hotels` + `trip-tours` через `/go/` (rel sponsored nofollow noopener). Внутр. ссылки на хабы `/cities/ /routes/ /planning/ /food/ /car-rental/`. `hotelWidget:true`. Гейты: `check`/`build`/`test`(enums+parity+photos+interlinks)/`test:links`(2765 ссылок)/`lint` зелёные, `qa`=GO. Перелинк-цели плана (7-day itinerary, best-time) пока ведут на хабы — заменить на статьи, когда выйдут (неделя 2–3).

## Дальше (роадмап — детали в `ROADMAP.md`)
- **R4 — контент (KALENDAR):** Неделя 1 — далее Пт 26.06 Дубровник (cities, ≥10 фото) + Вс 28.06 маршрут island hopping. Параллельно P0-волна релокейшн-клина (`docs/CONTENT_PLAN.md`); партнёрки (EKTA-трекинг, DiscoverCars).
- **Добор перелинковки:** при выходе `7-day-croatia-itinerary` и `best-time-to-visit-croatia` заменить ссылки-на-хабы в `zagreb-travel-guide` (×3 языка) на прямые ссылки на эти статьи (двунаправленный кластер).
- **R5 — запуск:** P1, добор до 10+ пар, недельный ритуал §17.
- **Отложенные фиксы:** `ROADMAP-FIX.md` (overflow 320px, добор фото статьи, www, политика конфиденциальности, dev-зависимости).
