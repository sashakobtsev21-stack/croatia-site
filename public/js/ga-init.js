/*
 * Google Analytics 4 — инициализация (G-MD4WT1JQ57, SPEC §17).
 * Внешний файл (script-src 'self', §18), чтобы строгий CSP без 'unsafe-inline' не
 * требовал sha256-хеша инлайна. Загрузчик gtag.js подключается отдельно в <head>
 * (googletagmanager.com, разрешён в script-src). ID централизован здесь.
 * dataLayer — очередь: порядок с асинхронным загрузчиком не важен. GA4 анонимизирует IP.
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-MD4WT1JQ57');
