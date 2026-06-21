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
// Consent Mode v2 (GDPR/ЕС): по умолчанию всё denied — GA не пишет cookies до согласия.
// Баннер CookieConsent поднимает analytics_storage до 'granted' при «Принять».
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
});
// Если пользователь уже соглашался ранее — поднимаем согласие сразу (до показа баннера).
try {
  if (localStorage.getItem('cg-consent') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {
  /* localStorage недоступен (приватный режим) — остаёмся на denied */
}
gtag('js', new Date());
gtag('config', 'G-MD4WT1JQ57');
