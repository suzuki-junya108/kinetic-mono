/* ============================================================
   KINETIC MONO v2.0 — Internationalization System
   Loads translations and switches UI language (JA/EN)
   ============================================================ */

(function () {
  'use strict';

  var SUPPORTED = ['ja', 'en'];
  var DEFAULT_LANG = 'en';
  var cache = {};

  /* ── Resolve base path ── */
  var scripts = document.getElementsByTagName('script');
  var thisScript = scripts[scripts.length - 1];
  var basePath = thisScript.src.substring(0, thisScript.src.lastIndexOf('/'));
  var langDir = basePath.replace(/\/js$/, '') + '/lang/';

  /* ── Get saved or default language ── */
  function getSavedLang() {
    try {
      var saved = localStorage.getItem('km-lang');
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  /* ── Resolve nested key like "nav.pages" ── */
  function resolve(obj, key) {
    var parts = key.split('.');
    var val = obj;
    for (var i = 0; i < parts.length; i++) {
      if (val == null) return undefined;
      val = val[parts[i]];
    }
    return val;
  }

  /* ── Apply translations to all [data-i18n] elements ── */
  function applyTranslations(dict) {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      var val = resolve(dict, key);
      if (val !== undefined) {
        // Check if value contains HTML (like <br>)
        if (val.indexOf('<') !== -1) {
          els[i].innerHTML = val;
        } else {
          els[i].textContent = val;
        }
      }
    }

    // Also apply to [data-i18n-placeholder]
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholders.length; j++) {
      var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
      var pVal = resolve(dict, pKey);
      if (pVal !== undefined) {
        placeholders[j].setAttribute('placeholder', pVal);
      }
    }

    // Apply to [data-i18n-aria]
    var arias = document.querySelectorAll('[data-i18n-aria]');
    for (var k = 0; k < arias.length; k++) {
      var aKey = arias[k].getAttribute('data-i18n-aria');
      var aVal = resolve(dict, aKey);
      if (aVal !== undefined) {
        arias[k].setAttribute('aria-label', aVal);
      }
    }

    // Update <html lang>
    document.documentElement.setAttribute('lang', dict.lang || DEFAULT_LANG);

    // Update language toggle buttons
    document.querySelectorAll('.km-lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === (dict.lang || DEFAULT_LANG);
      btn.classList.toggle('km-lang-btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  /* ── Fetch and apply a language ── */
  function loadLang(lang, callback) {
    if (cache[lang]) {
      applyTranslations(cache[lang]);
      if (callback) callback(cache[lang]);
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', langDir + lang + '.json', true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          var dict = JSON.parse(xhr.responseText);
          cache[lang] = dict;
          applyTranslations(dict);
          if (callback) callback(dict);
        } catch (e) {
          console.warn('[i18n] Parse error for ' + lang, e);
        }
      }
    };
    xhr.onerror = function () {
      console.warn('[i18n] Failed to load ' + lang);
    };
    xhr.send();
  }

  /* ── Switch language ── */
  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    try { localStorage.setItem('km-lang', lang); } catch (e) {}
    loadLang(lang);
  }

  /* ── Get current language ── */
  function getLang() {
    return getSavedLang();
  }

  /* ── Get translation value by key ── */
  function t(key) {
    var lang = getSavedLang();
    var dict = cache[lang];
    if (!dict) return key;
    var val = resolve(dict, key);
    return val !== undefined ? val : key;
  }

  /* ── Listen for language toggle clicks ── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.km-lang-btn');
    if (btn) {
      var lang = btn.getAttribute('data-lang');
      if (lang) setLang(lang);
    }
  });

  /* ── Initialize on DOM ready ── */
  var currentLang = getSavedLang();
  loadLang(currentLang);

  /* ── Expose API ── */
  if (window.KineticMono) {
    window.KineticMono.setLang = setLang;
    window.KineticMono.getLang = getLang;
    window.KineticMono.t = t;
    window.KineticMono.loadLang = loadLang;
  } else {
    window.KineticMono = {
      setLang: setLang,
      getLang: getLang,
      t: t,
      loadLang: loadLang
    };
  }

})();
