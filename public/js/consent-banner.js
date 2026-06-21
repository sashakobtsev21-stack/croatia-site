/*
 * Баннер согласия на cookies (Consent Mode v2, §17/§18). Показываем ТОЛЬКО если выбор ещё
 * не сделан. «Принять» → analytics_storage='granted' (GA начинает писать cookies);
 * «Отклонить» → остаёмся на denied (GA работает без cookies). Выбор — в localStorage.
 * Self-скрипт (CSP script-src 'self'); деградация без JS — баннер остаётся hidden.
 */
(function () {
  var KEY = 'cg-consent';
  var el = document.querySelector('[data-cookie-consent]');
  if (!el) return;

  var choice = null;
  try {
    choice = localStorage.getItem(KEY);
  } catch (e) {
    /* localStorage недоступен — показываем баннер каждый раз, выбор просто не сохранится */
  }
  if (choice === 'granted' || choice === 'denied') return; // уже решено — не показываем

  el.hidden = false;

  function decide(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {
      /* не сохранилось — не критично */
    }
    if (value === 'granted' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    el.hidden = true;
  }

  var accept = el.querySelector('[data-consent-accept]');
  var decline = el.querySelector('[data-consent-decline]');
  if (accept) {
    accept.addEventListener('click', function () {
      decide('granted');
    });
  }
  if (decline) {
    decline.addEventListener('click', function () {
      decide('denied');
    });
  }
})();
