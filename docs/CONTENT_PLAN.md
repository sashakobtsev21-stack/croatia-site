> ⚠️ **СПРАВОЧНИК / БЭКЛОГ — НЕ активный план.** Актуальный по-дневной контент-план — только в `/KALENDAR.md` (построен по SEO-аудиту, темп 3/будень). Этот файл = тематический бэклог **незакрытых** тем P1/P2 + справка по кластерам/партнёркам/`data_gaps`. **Не редактировать как активный план** (во избежание конфликта планов). Что и когда писать — смотреть в `KALENDAR.md`, а не здесь.
>
> **Тримминг 2026-06-30.** Выполненная волна P0 и статус-слой убраны как дублирующие реальный репозиторий: опубликованы `croatia-digital-nomad-visa`, `croatia-taxes-for-foreigners`, `open-company-croatia-doo` (d.o.o.), `renting-a-car-in-croatia` (аренда авто), `croatia-travel-insurance`, `best-time-to-visit-croatia`, `croatia-cost-of-living-nomads` (cost-of-living). Их строки и P0-таблица свёрнуты. Полный список опубликованного — `PROGRESS.md` / `src/content/`.

# CONTENT_PLAN.md — бэклог тем croatia-site (узкий релокейшн/MONEY-клин)

> **Что это.** Справочник по стратегии croatia-site и **незакрытый хвост тем** P1/P2. Источник
> решений — `docs/STRATEGY.md`; веб-проверенная фактура и кластерный план — `docs/CROATIA-ANALYSIS-2026-06-20.md`.
> Это «о чём ещё писать»; «как писать» — `CONTENT_GUIDE.md`, правила — `CLAUDE.md`; **когда — `KALENDAR.md`**.
>
> **Рамка (из STRATEGY).** Хорватия — **второй эшелон** (после Албании/Черногории), **узкий клин ~15–30 страниц**,
> НЕ широкий travel-сайт. **EN-first** (ключи от EN-интента; ru — дешёвый перевод). Приоритет — **MONEY/Релокация**
> на козыре **ЕС/Шенген/евро + номад-виза**; туризм — только глубокий хвост-довесок. Моат личного опыта обязателен.
>
> **Дисциплина фактов (CLAUDE правило 4 + YMYL).** Цифры/правила — только из брифа владельца или первоисточника
> (mup.gov.hr / porezna-uprava.gov.hr / PwC / EC). Числа из CROATIA-ANALYSIS — для планирования; перед публикацией
> сверять по `data_gaps` анализа. Нет факта → `<!-- TODO: факт от владельца -->`, не выдумывать.

## Легенда
- **Тип:** TRAFFIC (верх воронки) · MONEY (транзакционный/партнёрский) · YMYL (визы/налоги — особая сверка).
- **Кат.** — категория коллекции (`articles/<кат>/<lang>/<slug>.md`); хаб уже существует (перемоделирован).
- **Деньги** — целевая партнёрка через `/go/` (см. CROATIA-ANALYSIS §6; `partners.json` переиспользуется).
- **Факты** — откуда брать (CA = CROATIA-ANALYSIS §; «бриф» = нужен бриф владельца).
- **Приоритет:** P1 (вторая волна) · P2 (хвост).

---

## Бэклог — незакрытый хвост (тематический; даты — в `KALENDAR.md`)

> Только темы, ещё НЕ опубликованные в репозитории. Опубликованное (волна P0 + getting-around / best-time / Plitvice / Split↔Dubrovnik и т.п.) из таблиц убрано — см. `src/content/`.

### P1 — планирование (верх воронки, ведёт вниз) + опора городов

| # | Slug | Запрос | Тип | Кат. | Деньги | Факты | P |
|---|---|---|---|---|---|---|---|
| 1 | `croatia-travel-guide` | croatia travel guide / is croatia worth visiting | TRAFFIC | planning | ведёт на MONEY | CA §4 | P1 |
| 2 | `etias-ees-croatia` | croatia etias / entry requirements | YMYL/TRAFFIC | planning | — | CA §2 (ETIAS Q4 2026 €20; EES 10.04.2026 — сверить EC) | P1 |
| 3 | `living-in-zagreb` | living in zagreb | MONEY | relocation/cities | Wise | CA §3 + бриф | P1 |
| 4 | `croatia-residence-permit` | croatia residence permit / boravak | YMYL/MONEY | relocation | лид-ген | CA §2 (сверить mup.gov.hr) | P1 |
| 5 | `living-in-split` | living in split (croatia) | MONEY | relocation/cities | Wise, недвижимость | CA §3 + личный опыт/бриф (моат!) | P1 |

### P2 — глубокий travel-хвост (НЕ голова выдачи; ниша/глубина/личный опыт)

| # | Slug | Запрос | Тип | Кат. | Деньги | Факты | P |
|---|---|---|---|---|---|---|---|
| 6 | `istria-road-trip` | istria itinerary | TRAFFIC→MONEY | routes | DiscoverCars | CA §1 | P2 |
| 7 | `what-to-eat-in-croatia` | croatian food / what to eat | TRAFFIC | food | директория ресторанов | CA §5 + бриф | P2 |
| 8 | `yacht-charter-croatia` | croatia yacht charter | MONEY | entertainment/routes | чартер яхт (крупная HR-ниша) | CA §6 (сверить программы) | P2 |

---

## Порядок производства (по CLAUDE §12)
Для каждого материала: **бриф** (`briefs/{slug}.md`: ключевой запрос, вопросы читателя, ФАКТЫ владельца/первоисточник,
цены, фото) → скелет `npm run new -- <тип> <slug> --title "…"` (en/ru + DoD) → **черновик EN** (ключи от EN-интента)
→ фото (CC/Unsplash/Commons, ≤200КБ, атрибуция) → перевод ru → **fact-check** (особенно YMYL) → `npm run qa` GO → коммит.

## Открытые предусловия (из STRATEGY §7)
- **O1/O2 моат** — для `living-in-*` и личных цифр (DNV-бюджет, d.o.o. «как я открывал») нужен реальный опыт/стрингер.
- **Партнёрки** — EKTA-трекинг и регистрация DiscoverCars/GetYourGuide перед MONEY-материалами (см. `ROADMAP-FIX.md`).

---

_Источник приоритетов и фактуры: `docs/STRATEGY.md` + `docs/CROATIA-ANALYSIS-2026-06-20.md`. Грузинский CONTENT_PLAN
донора — образец структуры — в `docs/_georgia-reference/CONTENT_PLAN.md`._
