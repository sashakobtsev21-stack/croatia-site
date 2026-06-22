# CONTENT_PLAN.md — план контента croatia-site (узкий релокейшн/MONEY-клин)

> **Что это.** Приоритизированный план первых материалов под стратегию croatia-site. Источник
> решений — `docs/STRATEGY.md`; веб-проверенная фактура и кластерный план — `docs/CROATIA-ANALYSIS-2026-06-20.md`.
> Это «что и в каком порядке писать»; «как писать» — `CONTENT_GUIDE.md`, правила — `CLAUDE.md`.
>
> **Рамка (из STRATEGY).** Хорватия — **второй эшелон** (после Албании/Черногории), **узкий клин ~15–30 страниц**,
> НЕ широкий travel-сайт. **EN-first** (ключи от EN-интента; ru/uk — дешёвый перевод). Приоритет — **MONEY/Релокация**
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
- **Приоритет:** P0 (первая волна, 6–8 шт.) · P1 (вторая) · P2 (хвост).

---

## Волна P0 — ядро клина (релокейшн/MONEY, EN-first; ~6–8 материалов)

| # | Slug (EN) | Целевой EN-запрос | Тип | Кат. | Деньги | Факты | P |
|---|---|---|---|---|---|---|---|
| 1 | `croatia-digital-nomad-visa` | croatia digital nomad visa | YMYL/MONEY | relocation | SafetyWing (рекуррент), лид-ген юрфирмы | CA §2 (18 мес, €3 622,50/мес, 0% НДФЛ; сверить mup.gov.hr) | **P0** |
| 2 | `cost-of-living-croatia` | cost of living in croatia | MONEY | relocation | Wise, eSIM, страховка | CA §3 (Numbeo: Split €1700–1950 и т.п. — пометить [ОЦЕНКА]) | **P0** |
| 3 | `croatia-taxes-for-foreigners` | croatia taxes for foreigners | YMYL/MONEY | relocation | лид-ген, Wise | CA §2 (CIT 10/18%, НДФЛ-коридоры, НДС 25%; сверить PwC) | **P0** |
| 4 | `register-company-croatia` | register company in croatia / open d.o.o. | YMYL/MONEY | relocation | лид-ген (€500–2000 чек), Wise | CA §2 + сверить (капитал d.o.o./j.d.o.o. — data_gap) | **P0** |
| 5 | `car-rental-croatia` | car rental in croatia | MONEY | car-rental | **DiscoverCars** (cookie 365 дн) + Localrent (СНГ) | CA §6 (покрытие ZAG/SPU/DBV) | **P0** |
| 6 | `croatia-travel-insurance` | croatia travel insurance | MONEY | insurance | SafetyWing (EN) / EKTA (СНГ/UA) | CA §2 (EU/Шенген: €30k для визы; не обяз. безвизовым) | **P0** |
| 7 | `living-in-split` | living in split (croatia) | MONEY | relocation/cities | Wise, недвижимость | CA §3 + личный опыт/бриф (моат!) | **P0** |
| 8 | `esim-croatia` | best esim for croatia | MONEY | car-rental/relocation | **Airalo** / Saily | CA §6 | P0/P1 |

## Волна P1 — планирование (верх воронки, ведёт вниз) + опора городов

| # | Slug | Запрос | Тип | Кат. | Деньги | Факты | P |
|---|---|---|---|---|---|---|---|
| 9 | `croatia-travel-guide` | croatia travel guide / is croatia worth visiting | TRAFFIC | planning | ведёт на MONEY | CA §4 | P1 |
| 10 | `etias-ees-croatia` | croatia etias / entry requirements | YMYL/TRAFFIC | planning | — | CA §2 (ETIAS Q4 2026 €20; EES 10.04.2026 — сверить EC) | P1 |
| 11 | `best-time-to-visit-croatia` | best time to visit croatia | TRAFFIC | planning | — | CA §4 (сезонность Q3) | P1 |
| 12 | `living-in-zagreb` | living in zagreb | MONEY | relocation/cities | Wise | CA §3 + бриф | P1 |
| 13 | `croatia-residence-permit` | croatia residence permit / boravak | YMYL/MONEY | relocation | лид-ген | CA §2 (сверить mup.gov.hr) | P1 |
| 14 | `getting-around-croatia` | getting around croatia (ferries/transport) | TRAFFIC→MONEY | transport | аренда авто, Aviasales | CA §1/§4 (паромы, аэропорты) | P1 |

## Волна P2 — глубокий travel-хвост (НЕ голова выдачи; ниша/глубина/личный опыт)

| # | Slug | Запрос | Тип | Кат. | Деньги | Факты | P |
|---|---|---|---|---|---|---|---|
| 15 | `plitvice-lakes-guide` | plitvice lakes practical guide | TRAFFIC | attractions | GetYourGuide/Viator, авто | CA §1 + бриф/визит | P2 |
| 16 | `split-dubrovnik-road-trip` | croatia road trip itinerary | TRAFFIC→MONEY | routes | **DiscoverCars** + отели | CA §1/§5 | P2 |
| 17 | `dubrovnik-guide` | dubrovnik travel guide | TRAFFIC | cities | Booking, туры | CA §1 + бриф | P2 |
| 18 | `istria-road-trip` | istria itinerary | TRAFFIC→MONEY | routes | DiscoverCars | CA §1 | P2 |
| 19 | `what-to-eat-in-croatia` | croatian food / what to eat | TRAFFIC | food | директория ресторанов | CA §5 + бриф | P2 |
| 20 | `yacht-charter-croatia` | croatia yacht charter | MONEY | entertainment/routes | чартер яхт (крупная HR-ниша) | CA §6 (сверить программы) | P2 |

---

## Порядок производства (по CLAUDE §12)
Для каждого материала: **бриф** (`briefs/{slug}.md`: ключевой запрос, вопросы читателя, ФАКТЫ владельца/первоисточник,
цены, фото) → скелет `npm run new -- <тип> <slug> --title "…"` (en/ru/uk + DoD) → **черновик EN** (ключи от EN-интента)
→ фото (CC/Unsplash/Commons, ≤200КБ, атрибуция) → переводы ru/uk → **fact-check** (особенно YMYL) → `npm run qa` GO → коммит.

**Сначала P0** (6–8 материалов клина) → проверить по GSC после деплоя → расширять P1/P2 по фактическому спросу.

## Открытые предусловия (из STRATEGY §7)
- **O0 приоритет Хорватии** — клин делается, только если решено вести Хорватию сейчас (иначе после Албании/Черногории).
- **O1/O2 моат** — для `living-in-*` и личных цифр (DNV-бюджет, d.o.o. «как я открывал») нужен реальный опыт/стрингер.
- **O6 домен** — `croatiaguidebook.com` купить до деплоя/GSC.
- **Партнёрки** — починить `trip-tours` (сделано) и EKTA-трекинг; добавить DiscoverCars/GetYourGuide перед MONEY-материалами.

---

_Источник приоритетов и фактуры: `docs/STRATEGY.md` + `docs/CROATIA-ANALYSIS-2026-06-20.md`. Грузинский CONTENT_PLAN
донора — образец структуры — в `docs/_georgia-reference/CONTENT_PLAN.md`._
