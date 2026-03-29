/* ============================================================
   KINETIC MONO v2.0 — Icon System Loader
   Fetches SVG sprite and injects into document for <use> refs
   ============================================================ */

(function () {
  'use strict';

  /* ── Resolve sprite path relative to this script ── */
  var scripts = document.getElementsByTagName('script');
  var thisScript = scripts[scripts.length - 1];
  var basePath = thisScript.src.substring(0, thisScript.src.lastIndexOf('/'));
  var spritePath = basePath.replace(/\/js$/, '') + '/icons/km-icons.svg';

  /* ── Fetch and inject sprite ── */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', spritePath, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      var div = document.createElement('div');
      div.setAttribute('aria-hidden', 'true');
      div.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
      div.innerHTML = xhr.responseText;
      document.body.insertBefore(div, document.body.firstChild);
    }
  };
  xhr.send();

  /* ── Helper: create icon element ── */
  function createIcon(name, opts) {
    opts = opts || {};
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    var use = document.createElementNS(ns, 'use');

    svg.setAttribute('class', 'km-icon' + (opts.size ? ' km-icon--' + opts.size : '') + (opts.cls ? ' ' + opts.cls : ''));
    svg.setAttribute('aria-hidden', 'true');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#km-icon-' + name);
    use.setAttribute('href', '#km-icon-' + name);

    svg.appendChild(use);
    return svg;
  }

  /* ── Expose on KineticMono API ── */
  if (window.KineticMono) {
    window.KineticMono.icon = createIcon;
  } else {
    window.KineticMono = { icon: createIcon };
  }

})();
