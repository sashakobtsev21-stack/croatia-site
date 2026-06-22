# AUDIT — ledger croatia-site

> Сводный журнал аудитов: что закрыто, что открыто. Детальные прогоны — отдельными датированными файлами (`AUDIT-YYYY-MM-DD.md`). Обновляется при каждом аудите/закрытии находки.

## Прогоны
- **`AUDIT-2026-06-22.md`** — Этап 1, полный тех-аудит. `qa`=GO; `qa:browser`=GO после фикса перелива (M1). Critical/High — нет.

## Миграция URL-слагов (2026-06-22)
- ✅ Все 13 разделов переведены с русско-транслитных слагов на английские (единая EN-схема сети, эталон — North Macedonia): `/attractions/ /cities/ /food/ /entertainment/ /routes/ /planning/ /transport/ /car-rental/ /insurance/ /relocation/ (+ /relocation/services/) /news/ /about/ /contact/`. Переименованы директории `src/pages` (+ru/uk), enum `CATEGORIES`, i18n (ru/uk/en+types), все внутренние ссылки, frontmatter статьи, `new-content.mjs`/`qa-*`, sitemap-фильтр. 301-редиректы старых путей (root/ru/uk, вложенное `relokatsiya/uslugi → relocation/services` первым) в `public/_redirects`. Контракт-доки (CLAUDE.md, SPEC.md §7/§11/§16) обновлены. Гейты зелёные: `build` 58 стр., `check` 0 ошибок, `test:links` 2765/0 битых, `test`, `lint`.

## Закрыто (Этап 1, 2026-06-22)
- ✅ Грузинские следы в доках/инструкциях (SPEC §2/§4/§7/§16, CONTENT_GUIDE, `add-content` SKILL, `en-translator`) — перемоделированы под Хорватию.
- ✅ Дубль `src/content/services/.gitkeep` (коллекционный) — удалён.
- ✅ Фавикон/иконки (ранее флаг Грузии) → хорватская шаховница.
- ✅ Битые внутренние ссылки на ненаписанные «краеугольные» статьи (CityFoodPage/EdaDirectory/InsuranceHub) — гейтированы; `check-links` = 0.
- ✅ ru `<title>` 61>60 — укорочён. Hero `width/height` (CLS-замечание).
- ✅ **M1** Горизонтальный перелив адаптива (320–414px) — главная `services-band__cta` (full-width ≤480px) + хаб релокации `reg__item` (стопкой ≤560px); `qa:browser` responsive = GO (8×5).
- ✅ PWA: offline-fallback устойчив к 307-редиректу (sw v2).
- ✅ Cookie-consent (GDPR/ЕС) — Consent Mode v2 + баннер.
- ✅ `/news` — верифицирован хорватским (изменений не потребовалось).
- ✅ Безопасность: `/go/` open-redirect закрыт; секретов нет; prod-зависимости без high/critical; CSP/HSTS/XFO на живом домене.

## Открыто (см. `ROADMAP-FIX.md` с приоритетами)
- 🟡 **M4** — perf статьи 79 (лаб.) — вес инлайн-фото.
- ⚪ **L1** — `npm audit`: 24 уязвимости (dev-тулинг; правки только ломающим `--force`).
- ⏳ Добор фото существующей статьи до нормы (Этап 4), `www`-редирект, страница политики конфиденциальности.
