# HANDOFF — Croatia Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-30 · **Фаза:** R4 наполнение · **Статей:** ~27 (цель ~80) · **Сайт:** live (`croatiaguidebook.com`) · **Языки:** en/ru · **Последний коммит:** `d57ed52 publish(croatia): Plitvice Lakes from Zagreb or Split Without a Car (en+ru)` (+ docs-коммит следом)

## Где остановились
- **ROADMAP-FIX 30.06 (2 пункта):** (1) **www-редирект** реализован в репо — `worker/index.ts` `wwwRedirect()` отдаёт 301 `www.croatiaguidebook.com/*` → `https://croatiaguidebook.com/*` (до /go/-роутинга, партнёрки/сборка целы). ОСТАЁТСЯ owner-action: в Cloudflare dashboard добавить DNS `www` CNAME→apex **Proxied**, иначе запрос на www не дойдёт до воркера (в репо не выражается). Точные шаги + curl-проверка — в `ROADMAP-FIX.md`. (2) **Фото `croatia-digital-nomad-visa`** добрано до нормы: +1 инлайн Загреб (CC BY-SA 4.0, webp 188КБ) в en+ru → 5 фото. `qa`/`test:links`/`build`/`check` = GO.
- **Чистка доков 30.06:** `ROADMAP-FIX.md` — закрытые `[x]` (M1 перелив, `trip-tours kwd=Croatia`) свёрнуты в «Закрыто: 2 (см. AUDIT)»; активный долг не тронут. `docs/CONTENT_PLAN.md` (суперседед 22.06) урезан — убрана выполненная волна P0/статус-слой (дубль репо), сохранён бэклог P1/P2 (`croatia-travel-guide`, `etias-ees-croatia`, `living-in-zagreb`, `croatia-residence-permit`, `living-in-split`, `istria-road-trip`, `what-to-eat-in-croatia`, `yacht-charter-croatia`) + справка кластеров/партнёрок. `ROADMAP.md`/`KALENDAR.md` не тронуты; `src/` не менялся.
- Контент: последние опубликованные — **паром/Плитвице-кластер 30.06: `croatia-ferries-guide` (routes) + `zagreb-to-plitvice` (transport) + `plitvice-from-split` (routes) (3 пары en+ru, 5–6 фото каждая)**. До них — транспорт-кластер 29.06 (`getting-around-croatia` + `split-airport-to-city` + `split-to-dubrovnik-transport`). Полный лог — `PROGRESS.md`.
  - 30.06 заметки: статьи `category=routes` рендерятся коллекцией `articles` на `/routes/<slug>/` (НЕ коллекция `routes`, у неё обяз. days/distanceKm/stops). Перелинк-цели из KALENDAR разрешены к реальным: `plitvice-lakes-guide`→`plitvice-lakes-national-park`; `split-to-hvar-ferry` (дедуп-исключена)→`hvar-travel-guide`; `croatia-itinerary-without-car` (будущий слот 15.07, ещё нет)→`getting-around-croatia`/`zagreb-to-plitvice`. Цены билетов Плитвице 2026 — с офиц. np-plitvicka-jezera.hr (€40/€25/€15), «checked June 2026».
- **Восстановление после краша `/work` 29.06:** прогон оборвался с НЕзакоммиченной работой и NO-GO `qa` (6 frontmatter-полей сверх лимита: `description >155` ×6 + 2 ru-`title >60`). Подрезано → `qa`=GO, `test:links`=GO (5298 ссылок, 0 битых), перелинковка 100% (все 36 целей резолвятся). Опубликовано и закоммичено инкрементально.
- Календарь: слоты Вт 30.06 (3 паром/Плитвице-статьи) отмечены `[x] ОПУБЛИКОВАНО 2026-06-30`; до них Пн 29.06 (3 транспорт-статьи); остальные будущие даты = `○` к написанию; план до 31.07; темп 3/будний день; маршруты по Вс.
- **Планирование 30.06: добор до 3/будень на весь июль.** Все будни июля 01–31 теперь РОВНО по 3 темы (`KALENDAR.md`). Был неполный только Пт 31.07 (2) → добавлена 3-я тема `zagreb-airport-to-city` (transport, аналог `split-airport-to-city`, без дублей). Итого 75 `○`-тем на 25 будних дней (29.06–31.07).
- Сеть: доки выровнены (ядро 12/12); дашборд `grafana/dashboard.html` актуален; `/work` публикует автономно при полной уверенности.

## Что дальше
- Темы из `KALENDAR.md` на ближайшие дни (релокация/MONEY-клин, транспорт, города). SEO-актуализация по GSC ~06.07.

## Блокеры владельца
- GSC: Request Indexing + sitemap. Партнёрки (Travelpayouts: DiscoverCars/GetYourGuide/Booking + EKTA). www-редирект `www.croatiaguidebook.com` (Cloudflare). Моат-решение; дисплей-реклама (рек.: старт без).

## Не ломать (уже работает)
- Механика новостей: раздел хранит 10 дней, блок на главной — 2 дня; `/news` = сбор → фильтр → превью → «ок» → публикация (не автопостинг).
- Партнёрки только через `/go/{partner}?c={slug}` (`rel="sponsored nofollow noopener"`); прямые URL запрещены; `partners.json` (`kwd=Croatia`); open-redirect закрыт.
- Языковая пара en+ru с общим slug (`check-parity`); enum категорий в `content.config.ts`; EN-слаги разделов (миграция 22.06) + 301-редиректы в `public/_redirects` — не удалять.
- Hero-ротация/OG (`og-default.jpg`, secure_url), HTTP→HTTPS 301 в Worker, витрина-крутилка (CSS-marquee).

## Команды
- Гейты перед коммитом: `npm run qa` (= `check`+`build`+`test`+`test:links`+`lint`, должен быть GO); `npm run test:links` — внутренние ссылки и `/go/`.
- Скаффолд: `npm run new -- <тип> <slug> --title "…"` (генерит en/ru + папку фото + DoD).
- Скиллы: `/work` (дирижёр дня), `/news`, `/add-content`, `/full-audit`.
