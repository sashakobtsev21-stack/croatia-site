# HANDOFF — Croatia Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-29 · **Фаза:** R4 наполнение · **Статей:** ~24 (цель ~80) · **Сайт:** live (`croatiaguidebook.com`) · **Языки:** en/ru · **Последний коммит:** `69b3b03 publish(croatia): 3 transport guides (en+ru) + interlinks` (+ docs-коммит следом)

## Где остановились
- Контент: последние опубликованные — **транспорт-кластер 29.06: `getting-around-croatia` + `split-airport-to-city` + `split-to-dubrovnik-transport` (3 пары en+ru, `category=transport`, 5–6 фото каждая)**. До них — `open-company-croatia-doo` (relocation, 28.06) + усиление SEO `croatia-travel-insurance` (28.06). Полный лог — `PROGRESS.md`.
- **Восстановление после краша `/work` 29.06:** прогон оборвался с НЕзакоммиченной работой и NO-GO `qa` (6 frontmatter-полей сверх лимита: `description >155` ×6 + 2 ru-`title >60`). Подрезано → `qa`=GO, `test:links`=GO (5298 ссылок, 0 битых), перелинковка 100% (все 36 целей резолвятся). Опубликовано и закоммичено инкрементально.
- Календарь: слоты Пн 29.06 (3 транспорт-статьи) отмечены `[x] ОПУБЛИКОВАНО 2026-06-29`; остальные будущие даты = `○` к написанию; план до 31.07; темп 3/будний день; маршруты по Вс.
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
