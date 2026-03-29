/* ============================================================
   KINETIC MONO v2.0 — Navigation & Accent System
   Injects shared nav, manages accent modes via localStorage
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav HTML ── */
  const NAV_HTML = `
    <nav class="km-nav" id="km-nav-el" role="navigation" aria-label="Main navigation">
      <div class="km-nav__header">
        <div class="km-nav__logo-mark" aria-hidden="true">KM</div>
        <div>
          <div class="km-nav__brand-name">KINETIC</div>
          <div class="km-nav__brand-sub">MONO v2.0</div>
        </div>
      </div>

      <div class="km-nav__section">
        <div class="km-nav__section-label" data-i18n="nav.pages">PAGES</div>
        <a href="index.html" class="km-nav__link" data-target="index" aria-label="Landing page">
          <span class="km-nav__link-index">01</span>
          <span class="km-nav__link-name" data-i18n="nav.landing">LANDING</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="dashboard.html" class="km-nav__link" data-target="dashboard" aria-label="Dashboard">
          <span class="km-nav__link-index">02</span>
          <span class="km-nav__link-name" data-i18n="nav.dashboard">DASHBOARD</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="gallery.html" class="km-nav__link" data-target="gallery" aria-label="Gallery">
          <span class="km-nav__link-index">03</span>
          <span class="km-nav__link-name" data-i18n="nav.gallery">GALLERY</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="gallery-detail.html" class="km-nav__link" data-target="gallery-detail" aria-label="Item detail">
          <span class="km-nav__link-index">04</span>
          <span class="km-nav__link-name" data-i18n="nav.item_detail">ITEM DETAIL</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="icons.html" class="km-nav__link" data-target="icons" aria-label="Icons">
          <span class="km-nav__link-index">05</span>
          <span class="km-nav__link-name" data-i18n="nav.icons">ICONS</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
      </div>

      <div class="km-nav__section">
        <div class="km-nav__section-label" data-i18n="nav.samples">SAMPLES</div>
        <a href="product.html" class="km-nav__link" data-target="product" aria-label="Product landing">
          <span class="km-nav__link-index">08</span>
          <span class="km-nav__link-name" data-i18n="nav.product">PRODUCT</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="login.html" class="km-nav__link" data-target="login" aria-label="Login page">
          <span class="km-nav__link-index">09</span>
          <span class="km-nav__link-name" data-i18n="nav.login">LOGIN</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="register.html" class="km-nav__link" data-target="register" aria-label="Registration page">
          <span class="km-nav__link-index">10</span>
          <span class="km-nav__link-name" data-i18n="nav.register">REGISTER</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="contact.html" class="km-nav__link" data-target="contact" aria-label="Contact form">
          <span class="km-nav__link-index">11</span>
          <span class="km-nav__link-name" data-i18n="nav.contact">CONTACT</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="pricing.html" class="km-nav__link" data-target="pricing" aria-label="Pricing">
          <span class="km-nav__link-index">12</span>
          <span class="km-nav__link-name" data-i18n="nav.pricing">PRICING</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="profile.html" class="km-nav__link" data-target="profile" aria-label="User profile">
          <span class="km-nav__link-index">13</span>
          <span class="km-nav__link-name" data-i18n="nav.profile">PROFILE</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="blog.html" class="km-nav__link" data-target="blog" aria-label="Blog article">
          <span class="km-nav__link-index">14</span>
          <span class="km-nav__link-name" data-i18n="nav.blog">BLOG</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="analytics.html" class="km-nav__link" data-target="analytics" aria-label="Analytics dashboard">
          <span class="km-nav__link-index">15</span>
          <span class="km-nav__link-name" data-i18n="nav.analytics">ANALYTICS</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="inbox.html" class="km-nav__link" data-target="inbox" aria-label="Inbox">
          <span class="km-nav__link-index">16</span>
          <span class="km-nav__link-name" data-i18n="nav.inbox">INBOX</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="errors.html" class="km-nav__link" data-target="errors" aria-label="Error states">
          <span class="km-nav__link-index">17</span>
          <span class="km-nav__link-name" data-i18n="nav.errors">ERRORS</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
      </div>

      <div class="km-nav__section">
        <div class="km-nav__section-label" data-i18n="nav.system">SYSTEM</div>
        <a href="docs.html" class="km-nav__link" data-target="docs" aria-label="Design documentation">
          <span class="km-nav__link-index">06</span>
          <span class="km-nav__link-name" data-i18n="nav.design_docs">DESIGN DOCS</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
        <a href="settings.html" class="km-nav__link" data-target="settings" aria-label="Settings">
          <span class="km-nav__link-index">07</span>
          <span class="km-nav__link-name" data-i18n="nav.settings">SETTINGS</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
      </div>

      <div class="km-nav__section">
        <div class="km-nav__section-label" data-i18n="nav.tools">TOOLS</div>
        <a href="generator.html" class="km-nav__link" data-target="generator" aria-label="Image generator">
          <span class="km-nav__link-index">08</span>
          <span class="km-nav__link-name" data-i18n="nav.generator">GENERATOR</span>
          <svg class="km-icon" aria-hidden="true"><use href="#km-icon-arrow-right"></use></svg>
        </a>
      </div>

      <div class="km-nav__lang-panel">
        <div class="km-nav__section-label">LANGUAGE</div>
        <div class="km-nav__lang-btns" role="group" aria-label="Language">
          <button class="km-lang-btn" data-lang="ja" aria-label="日本語" aria-pressed="true">
            <span class="km-lang-btn__label">JA</span>
            <span class="km-lang-btn__name">日本語</span>
          </button>
          <button class="km-lang-btn" data-lang="en" aria-label="English" aria-pressed="false">
            <span class="km-lang-btn__label">EN</span>
            <span class="km-lang-btn__name">English</span>
          </button>
        </div>
      </div>

      <div class="km-nav__accent-panel">
        <div class="km-nav__section-label" data-i18n="nav.accent_mode">ACCENT MODE</div>
        <div class="km-nav__mode-btns" role="group" aria-label="Accent color mode">

          <button class="km-mode-btn" data-mode="single"
                  aria-label="Single accent: Kinetic Yellow">
            <span class="km-swatch" style="background:var(--palette-yellow)" aria-hidden="true"></span>
            <span class="km-mode-btn__label" data-i18n="common.single">SINGLE</span>
          </button>

          <button class="km-mode-btn" data-mode="dual"
                  aria-label="Dual accent: Yellow and Blue">
            <span class="km-swatch" style="background:var(--palette-yellow)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-blue)" aria-hidden="true"></span>
            <span class="km-mode-btn__label" data-i18n="common.dual">DUAL</span>
          </button>

          <button class="km-mode-btn" data-mode="tri"
                  aria-label="Tri accent: Yellow, Blue, Red">
            <span class="km-swatch" style="background:var(--palette-yellow)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-blue)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-red)" aria-hidden="true"></span>
            <span class="km-mode-btn__label" data-i18n="common.tri">TRI</span>
          </button>

          <button class="km-mode-btn" data-mode="full"
                  aria-label="Full spectrum accent: all six colors">
            <span class="km-swatch" style="background:var(--palette-yellow)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-blue)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-red)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-green)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-purple)" aria-hidden="true"></span>
            <span class="km-swatch" style="background:var(--palette-orange)" aria-hidden="true"></span>
            <span class="km-mode-btn__label" data-i18n="common.full">FULL</span>
          </button>

        </div>
      </div>

      <div class="km-nav__footer">
        <div data-i18n="nav.footer">THE CLINICAL CURATOR</div>
      </div>
    </nav>
    <button class="km-nav-toggle" id="km-nav-toggle" aria-label="Toggle navigation"><svg class="km-icon km-icon--lg" aria-hidden="true"><use href="#km-icon-menu"></use></svg></button>
  `;

  /* ── Insert nav into #km-nav placeholder ── */
  const mount = document.getElementById('km-nav');
  if (mount) {
    mount.outerHTML = NAV_HTML;
  }

  /* ── Mark active page ── */
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    const activeLink = document.querySelector(`.km-nav__link[data-target="${currentPage}"]`);
    if (activeLink) {
      activeLink.classList.add('km-nav__link--active');
      activeLink.setAttribute('aria-current', 'page');
    }
  }

  /* ── Accent mode system ── */
  function applyAccentMode(mode) {
    document.documentElement.setAttribute('data-accent', mode);
    try { localStorage.setItem('km-accent', mode); } catch(e) {}

    // Update button states
    document.querySelectorAll('.km-mode-btn').forEach(function (btn) {
      const isActive = btn.getAttribute('data-mode') === mode;
      btn.classList.toggle('km-mode-btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  // Load saved mode (default: single)
  let savedMode = 'single';
  try { savedMode = localStorage.getItem('km-accent') || 'single'; } catch(e) {}
  applyAccentMode(savedMode);

  // Listen for mode button clicks
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.km-mode-btn');
    if (btn) {
      applyAccentMode(btn.getAttribute('data-mode'));
    }
  });

  /* ── Mobile nav backdrop ── */
  const backdrop = document.createElement('div');
  backdrop.className = 'km-nav-backdrop';
  backdrop.id = 'km-nav-backdrop';
  document.body.appendChild(backdrop);

  function closeNav() {
    const nav = document.getElementById('km-nav-el');
    const bd = document.getElementById('km-nav-backdrop');
    if (nav) nav.classList.remove('km-nav--open');
    if (bd) bd.classList.remove('km-nav-backdrop--visible');
  }

  function openNav() {
    const nav = document.getElementById('km-nav-el');
    const bd = document.getElementById('km-nav-backdrop');
    if (nav) nav.classList.add('km-nav--open');
    if (bd) bd.classList.add('km-nav-backdrop--visible');
  }

  /* ── Mobile nav toggle ── */
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('#km-nav-toggle');
    if (toggle) {
      const nav = document.getElementById('km-nav-el');
      if (nav && nav.classList.contains('km-nav--open')) {
        closeNav();
      } else {
        openNav();
      }
      return;
    }

    // Close nav when clicking outside or on backdrop on mobile
    if (window.innerWidth <= 768) {
      const nav = document.getElementById('km-nav-el');
      if (nav && nav.classList.contains('km-nav--open') && !nav.contains(e.target)) {
        closeNav();
      }
    }
  });

  /* ── Close nav on Escape key ── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && window.innerWidth <= 768) {
      closeNav();
    }
  });

  /* ── Expose accent API globally ── */
  window.KineticMono = {
    setAccent: applyAccentMode,
    getAccent: function() {
      return document.documentElement.getAttribute('data-accent') || 'single';
    }
  };

})();
