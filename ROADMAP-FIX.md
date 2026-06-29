# ROADMAP-FIX — отложенные исправления croatia-site

> Приоритезированный список фиксов из аудита (`AUDIT-2026-06-22.md`) и сессий. Закрытые отмечать `- [x]` + дата. Не путать с `ROADMAP.md` (фазы продукта) — здесь технический долг.

> **Закрыто: 2** (свёрнуто 2026-06-30, детали в `AUDIT-2026-06-22.md`): M1 горизонтальный перелив 320–414px (ИСПРАВЛЕНО 22.06, `qa:browser` responsive = GO); `trip-tours` партнёрка уже `kwd=Croatia` (проверено).

## P1 — до запуска / при первой возможности
- [x] **www-редирект (логика в репо реализована 2026-06-30)** — в `worker/index.ts` добавлен `wwwRedirect()`: при `Host: www.croatiaguidebook.com` отдаёт **301** на apex `https://croatiaguidebook.com` + тот же путь/query (до /go/-роутинга, не ломает партнёрки; build/qa/test:links = GO). **ОСТАЛОСЬ (owner: Cloudflare dashboard)** — запрос на www-хост должен физически дойти до воркера, а это в репо не выражается: в дашборде нужно создать **DNS-запись `www`** (тип CNAME → `croatiaguidebook.com`, **Proxied / оранжевое облако**), чтобы Cloudflare маршрутизировал `www.*` на тот же воркер. Шаги: Cloudflare → домен `croatiaguidebook.com` → **DNS → Records → Add record**: Type `CNAME`, Name `www`, Target `croatiaguidebook.com`, Proxy status **Proxied**, Save. (Custom-domain воркера привязан к apex; этого CNAME достаточно, чтобы www шёл через прокси к воркеру и получал наш 301. Отдельное Redirect Rule НЕ требуется — редирект делает воркер.) После добавления записи проверить: `curl -sI https://www.croatiaguidebook.com/` → `301` + `Location: https://croatiaguidebook.com/`.

## P2 — качество / соответствие
- [ ] **M4. Perf статьи DNV** — Lighthouse mobile perf 79 (лаб.). Проверить вес каждого инлайн-webp (≤200КБ) и `width/height`; держать бюджет при доборе фото.
- [x] **Добор фото статьи до нормы (2026-06-30)** — `croatia-digital-nomad-visa`: было cover + 3 инлайн = 4; добавлен 4-й инлайн (Загреб, Trg bana Jelačića, Vojtěch Dočkal / Wikimedia Commons · CC BY-SA 4.0, webp 1280×960 188КБ) в секцию «How to apply» в **обеих** версиях (en+ru, паритет) → cover + 4 инлайн = **5 фото**. `test:photos`/`qa`/`test:links` = GO.
- [ ] **Страница политики конфиденциальности** — cookie-баннер (Consent Mode v2) пока без ссылки на политику; для полного GDPR создать `/about/`-подобную страницу политики и сослаться из баннера.

## P3 — гигиена
- [ ] **L1. `npm audit` (dev)** — 24 уязвимости (2 low + 22 moderate), только dev-тулинг, не в прод-бандле; все правки требуют ломающих `--force`-бампов. Отдельная задача на осознанный апдейт зависимостей (проверить зелёный build после).
- [ ] **`offline.html` 307** — устранено на стороне sw (v2 кеширует чистую копию). Опционально: выровнять `html_handling` в `wrangler.jsonc`, чтобы `/offline.html` не редиректил (низкий приоритет).

## Партнёрки (нужен ввод владельца — деньги, не баг)
- [ ] **EKTA** — корректная трекинг-ссылка из кабинета Travelpayouts (сейчас временный прямой URL без атрибуции).
- [ ] **DiscoverCars** — регистрация + affiliate ID (для `car-rental-croatia`). Позже GetYourGuide/Viator (туры).
