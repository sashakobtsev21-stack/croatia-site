# Memory index — Croatia Guidebook

> Проектная память croatia-site (зеркало ключевых решений). Источник истины по стратегии —
> `docs/STRATEGY.md` + `docs/CROATIA-ANALYSIS-2026-06-20.md`. Грузинская память движка-донора —
> в архиве `docs/_georgia-reference/memory/` (балласт-образец, не актуально).

<!-- Формат строки индекса: - [Заголовок](источник) — короткий хук, что внутри -->

- [Гео и аудитория](../STRATEGY.md) — **EN-first**; Tier-1/Запад первично, СНГ вторично; Хорватия в ЕС/Шенгене/еврозоне (**€**), въезд по правилам ЕС (НЕ сухопутный, как в Грузии).
- [Узкий клин, не широкий travel](../STRATEGY.md) — релокейшн/MONEY-клин ~15–30 страниц; туризм — глубокий хвост; моат личного опыта обязателен; уникальный козырь — ЕС/Шенген/евро + номад-виза.
- [Контент-модель: город = статья](../../CLAUDE.md) — город — это статья `category=cities` (английский слаг); отдельная коллекция `cities` для наполнения **НЕ используется** (имя `goroda` из движка-донора не применяется, миграция слагов 2026-06-22).
- [URL-слаги разделов — английские (2026-06-22)](../../CLAUDE.md) — все разделы переведены с русско-транслитных на английские слаги (единая EN-схема сети, эталон North Macedonia): `/attractions/ /cities/ /food/ /entertainment/ /routes/ /planning/ /transport/ /car-rental/ /insurance/ /relocation/ (+ /relocation/services/) /news/ /about/ /contact/`. Старые пути → 301 в `public/_redirects` (root/ru/uk; вложенное `relokatsiya/uslugi → relocation/services` первым). `category` в .md и enum `CATEGORIES` — английские; коллекции (routes/cities/restaurants/services) имена не меняли.
- [Текущее состояние контента](../../PROGRESS.md) — **1 статья** `croatia-digital-nomad-visa` (en/ru/uk); `cities/routes/restaurants/services` пусты по дизайну (контент = Этап 4).
- [/news локализован под Хорватию](../../.claude/skills/news/SKILL.md) — источники Total Croatia News / Croatia Week / Dubrovnik Times; аэропорты ZAG/SPU/DBV (`*.hr`); `mup.gov.hr` / `croatia.hr`; евро (курс не отслеживаем); даты только текущего года. Верифицирован 2026-06-22.
- [Грузинские следы вычищены (Этап 1)](../../AUDIT-2026-06-22.md) — SPEC §2/§4/§7/§16, CONTENT_GUIDE, `add-content`, `en-translator`, `photo-auditor`, фавикон (шаховница), SETUP-GUIDE (`gruzia-site`→`croatia-site`).
- [docs/_georgia-reference — балласт-образец](../_georgia-reference/README.md) — справочный архив движка-донора, НЕ актуальная документация, в сборку не попадает; **не удалять**.
- [Источник истины по стратегии](../CROATIA-ANALYSIS-2026-06-20.md) — `STRATEGY.md` + `CROATIA-ANALYSIS-2026-06-20.md`; при конфликте с Частью I `SPEC.md` приоритет у них.
- [Стандарты и дисциплина](../../CLAUDE.md) — СТАНДАРТЫ (объём 1200–2000 слов; фото статья≥5/город≥10/Загреб≥15 webp≤200КБ; тон-нейтив не AI; `/go/`+rel) + ПРАВИЛО ДИСЦИПЛИНЫ (после каждой доработки: обнови доки + commit+push в `main`).
- [Аналитика GA4 + Consent Mode v2](../../SPEC.md) — `G-MD4WT1JQ57`; cookie-баннер (en/ru/uk); `analytics_storage='denied'` до согласия (§17/§18).
- [Деплой](../../HANDOFF.md) — `croatiaguidebook.com` живой (Cloudflare Workers); GSC подключён; `www` не настроен (см. `ROADMAP-FIX.md`).
- [Отложенные фиксы](../../ROADMAP-FIX.md) — перелив `/@320px`, добор фото статьи, `www`-редирект, политика конфиденциальности, dev-зависимости, EKTA/DiscoverCars.
