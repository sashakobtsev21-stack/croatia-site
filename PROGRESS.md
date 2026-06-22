# PROGRESS — croatia-site

> Статус и роадмап-трекинг. Обновляется после каждой доработки (CLAUDE правило 9 / ПРАВИЛО ДИСЦИПЛИНЫ).
> Источник истины по стратегии — `docs/STRATEGY.md` + `docs/CROATIA-ANALYSIS-2026-06-20.md`. Аудит — `AUDIT.md` / `AUDIT-2026-06-22.md`. Отложенные фиксы — `ROADMAP-FIX.md`.

**Дата:** 2026-06-22 · **Фаза:** конец R3 → вход в R4 (контент) · **Сборка:** 58 страниц, `qa` = GO, `qa:browser` = GO.

## Текущее состояние (по факту)
- **Контент:** 1 статья `croatia-digital-nomad-visa` (en/ru/uk, `category=relocation`). Коллекции `cities` / `routes` / `restaurants` / `services` — **пусты по дизайну** (контент = Этап 4). Модель: **город = статья `category=cities`** (английский слаг), отдельная коллекция `cities` для наполнения не используется (имя `goroda` из движка-донора не применяется).
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

## Дальше (роадмап — детали в `ROADMAP.md`)
- **R4 — контент:** P0-волна релокейшн-клина (7 статей; см. `docs/CONTENT_PLAN.md`); партнёрки (EKTA-трекинг, DiscoverCars).
- **R5 — запуск:** P1, добор до 10+ пар, недельный ритуал §17.
- **Отложенные фиксы:** `ROADMAP-FIX.md` (overflow 320px, добор фото статьи, www, политика конфиденциальности, dev-зависимости).
