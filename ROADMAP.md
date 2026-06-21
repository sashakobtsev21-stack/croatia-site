# ROADMAP — croatia-site

> Фазовый план. Источник истины по нише/приоритетам — `docs/STRATEGY.md` + `docs/CROATIA-ANALYSIS-2026-06-20.md` + `docs/CONTENT_PLAN.md`. Полный фазовый план движка — `SPEC.md` §20/§24. Отложенные баги/мелочи — `ROADMAP-FIX.md`.

**Сейчас:** конец R3 → R4. Движок + запуск-инфраструктура готовы; главный фронт — контент.

## Фазы
| Фаза | Содержание | Статус |
|---|---|---|
| R0 Спека/стратегия | SPEC + CLAUDE + STRATEGY + CROATIA-ANALYSIS + CONTENT_PLAN | ✅ |
| R1 Каркас + деплой | Astro+Tailwind, структура, токены, Cloudflare Workers, домен | ✅ (домен живой) |
| R2 Дизайн | адриатические токены, главная, hero, фавикон-шаховница | ✅ |
| R3 Шаблоны | Article/Route/Hub + директория «Где поесть» + компоненты + демо | ✅ |
| **Этап 1 (тех-чистка)** | аудит, чистка грузинских следов, инфра-доки, стандарты, память, верификация `/news` | ✅ (2026-06-22) |
| **R4 Конвейер (контент)** | P0-волна релокейшн-клина (7 статей); партнёрки EKTA/DiscoverCars; гейт: 3 пары + клики по SubID | ⏳ следующий |
| R5 Запуск | P1, добор до 10+ пар, недельный ритуал §17, индексация | ☐ |
| R6 Рост | P2 (travel-хвост), 2–3 пары/нед, Telegram/Pinterest, программатик, PWA-полировка | ☐ |

## R4 — контент (узкий релокейшн/MONEY-клин, EN-first)
P0 (`docs/CONTENT_PLAN.md`): `croatia-digital-nomad-visa` ✅ → `cost-of-living-croatia`, `croatia-taxes-for-foreigners`, `register-company-croatia`, `car-rental-croatia`, `croatia-travel-insurance`, `living-in-split`, `esim-croatia`.

**Границы:** контент — Этап 4; SEO-стратегия/ключи, контент-календарь, редизайн, массовая генерация — **не сейчас**. Модель «город = статья `category=goroda`» и URL не менять без необходимости; правка slug = 301 в `public/_redirects`.
