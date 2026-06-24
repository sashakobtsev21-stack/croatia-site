# ROADMAP — croatia-site

> Фазовый план. Источник истины по нише/приоритетам — `docs/STRATEGY.md` + `docs/CROATIA-ANALYSIS-2026-06-20.md` + `docs/CONTENT_PLAN.md`. Полный фазовый план движка — `SPEC.md` §20/§24. Отложенные баги/мелочи — `ROADMAP-FIX.md`.

**Сейчас:** R4 content. После аудита сети 2026-06-24 владелец подтвердил курс:
**relocation/money-клин first**. Broad-travel уже опубликован как стартовый фундамент, но
следующие спринты — DNV/налоги/d.o.o./living/cost/insurance/banking.

## Фазы
| Фаза | Содержание | Статус |
|---|---|---|
| R0 Спека/стратегия | SPEC + CLAUDE + STRATEGY + CROATIA-ANALYSIS + CONTENT_PLAN | ✅ |
| R1 Каркас + деплой | Astro+Tailwind, структура, токены, Cloudflare Workers, домен | ✅ (домен живой) |
| R2 Дизайн | адриатические токены, главная, hero, фавикон-шаховница | ✅ |
| R3 Шаблоны | Article/Route/Hub + директория «Где поесть» + компоненты + демо | ✅ |
| **Этап 1 (тех-чистка)** | аудит, чистка грузинских следов, инфра-доки, стандарты, память, верификация `/news` | ✅ (2026-06-22) |
| **R4 Конвейер (контент)** | P0-волна релокейшн-клина (7–12 статей); EKTA/SafetyWing/Wise/банкинг/eSIM; гейт: QA + GSC + клики по SubID | ⏳ идёт |
| R5 Запуск | P1, добор до 10+ пар, недельный ритуал §17, индексация | ☐ |
| R6 Рост | P2 (travel-хвост), 2–3 пары/нед, Telegram/Pinterest, программатик, PWA-полировка | ☐ |

## R4 — контент (узкий релокейшн/MONEY-клин, EN-first)
P0 (`docs/CONTENT_PLAN.md` + KALENDAR override 2026-06-24): `croatia-digital-nomad-visa` ✅,
`croatia-travel-insurance` ✅, `renting-a-car-in-croatia` ✅ →
`croatia-cost-of-living-nomads`, `croatia-taxes-for-foreigners`,
`open-company-croatia-doo`, `living-in-split-digital-nomad`,
`croatia-residence-permit-types`, `best-cities-croatia-digital-nomads`,
`croatia-bank-account-foreigners`, `croatia-esim-remote-work`.

Broad-travel слоты остаются в календаре как long-tail/backlog, но ближайшие неопубликованные
рабочие дни переставлены на relocation/money first. Новые broad-travel темы без живого моата
(стрингер/поездка/свои фото) не добавлять.

**Границы:** контент — Этап 4; SEO-стратегия/ключи, контент-календарь, редизайн, массовая генерация — **не сейчас**. Модель «город = статья `category=cities`» (английский слаг, миграция 2026-06-22) и URL не менять без необходимости; правка slug = 301 в `public/_redirects`.
