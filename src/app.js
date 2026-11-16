// ══════════════════════════════════════════════════════════
// OléCAD — app.js
// scroll reveal · language switch · booking card · counters
// ══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ─────────────── Scroll reveal ───────────────
  const reveal = () => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
  };

  // ─────────────── Counter animations ───────────────
  const animateCounters = () => {
    const els = document.querySelectorAll('[data-counter]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseInt(el.getAttribute('data-counter'), 10);
          const dur = 1400;
          const start = performance.now();
          const from = 0;
          const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(from + (target - from) * eased).toLocaleString('es-ES');
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => obs.observe(el));
  };

  // ─────────────── Language switch (ES / PT) ───────────────
  const setLang = (lang) => {
    document.documentElement.lang = lang;
    const dict = (window.OLE_I18N && window.OLE_I18N[lang]) || null;
    // Toggle all .lang-pill buttons
    document.querySelectorAll('.lang-pill button').forEach((b) => {
      const on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    if (!dict && lang !== 'es') return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      // For ES, restore from data-i18n-default if set
      if (lang === 'es') {
        const def = el.getAttribute('data-i18n-default');
        if (def !== null) el.textContent = def;
      } else if (dict[key]) {
        if (!el.hasAttribute('data-i18n-default')) {
          el.setAttribute('data-i18n-default', el.textContent);
        }
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (lang === 'es') {
        const def = el.getAttribute('data-i18n-html-default');
        if (def !== null) el.innerHTML = def;
      } else if (dict[key]) {
        if (!el.hasAttribute('data-i18n-html-default')) {
          el.setAttribute('data-i18n-html-default', el.innerHTML);
        }
        el.innerHTML = dict[key];
      }
    });

    try {
      localStorage.setItem('olecad-lang', lang);
    } catch (_) {}
  };

  const initLang = () => {
    document.querySelectorAll('.lang-pill button').forEach((b) => {
      b.addEventListener('click', () => setLang(b.getAttribute('data-lang')));
    });
    let saved = 'es';
    try {
      saved = localStorage.getItem('olecad-lang') || 'es';
    } catch (_) {}
    if (saved !== 'es') setLang(saved);
  };

  // ─────────────── Booking card behaviour ───────────────
  // Envío al formulario HubSpot « OléCAD · Contacto web » (notifica a Arthur y Léo).
  // Si el envío falla, se abre el cliente de correo como respaldo.
  const OLE_FORM = '2d4abc8c-a319-4faf-86f2-019262870e1e';

  const initBooking = () => {
    const card = document.getElementById('bookingCard');
    const opts = document.querySelectorAll('.booking-opt');
    opts.forEach((o) =>
      o.addEventListener('click', () => {
        opts.forEach((x) => x.classList.remove('sel'));
        o.classList.add('sel');
      })
    );

    const submit = document.getElementById('bookSubmit');
    if (!submit || !card) return;

    const original = submit.innerHTML;
    const finish = (ok, emailEl, telEl) => {
      submit.innerHTML = ok
        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ¡Listo! Te contactamos en &lt; 24 h'
        : 'Error — escríbenos a contacto@olecad.com';
      submit.style.background = ok ? '#16A34A' : '#B91C1C';
      setTimeout(() => {
        submit.innerHTML = original;
        submit.style.background = '';
        submit.disabled = false;
        if (ok && emailEl) emailEl.value = '';
        if (ok && telEl) telEl.value = '';
      }, 3400);
    };

    submit.addEventListener('click', async (e) => {
      e.preventDefault();
      const emailEl = card.querySelector('input[type="email"]');
      const telEl = card.querySelector('input[type="tel"]');
      const email = ((emailEl && emailEl.value) || '').trim();
      const phone = ((telEl && telEl.value) || '').trim();
      const selEl = card.querySelector('.booking-opt.sel strong');
      const interest = selEl ? selEl.textContent.trim() : '';

      if (!email || !/.+@.+\..+/.test(email)) {
        if (emailEl) {
          emailEl.focus();
          emailEl.style.borderColor = '#EF4444';
        }
        return;
      }
      if (emailEl) emailEl.style.borderColor = '';

      submit.disabled = true;
      submit.innerHTML = 'Enviando…';

      const ok = window.omcLead
        ? await window.omcLead.submit(OLE_FORM, { email: email, phone: phone, message: 'Interés: ' + interest })
        : false;
      if (ok) {
        finish(true, emailEl, telEl);
        return;
      }
      // Respaldo: abrir el cliente de correo
      const subject = encodeURIComponent('Solicitud de demo OléCAD');
      const body = encodeURIComponent('Interés: ' + interest + '\nEmail: ' + email + '\nTeléfono: ' + phone);
      window.location.href = 'mailto:contacto@olecad.com?subject=' + subject + '&body=' + body;
      finish(true, emailEl, telEl);
    });
  };

  // ─────────────── Parallax glow on hero ───────────────
  const initParallax = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const g1 = hero.querySelector('.hero-glow.g1');
    const g2 = hero.querySelector('.hero-glow.g2');
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (g1) g1.style.transform = `translate(${x}px, ${y}px)`;
      if (g2) g2.style.transform = `translate(${-x}px, ${-y}px)`;
    };
    hero.addEventListener('mousemove', onMove);
  };

  const initScrollParallax = () => {
    const grid = document.querySelector('.hero-grid-bg');
    if (!grid) return;
    const onScroll = () => {
      const y = window.scrollY;
      grid.style.transform = `translateY(${y * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  };

  // ─────────────── Mobile hamburger toggle ───────────────
  const initHamburger = () => {
    const btn = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      nav.style.display = open ? 'flex' : '';
      nav.style.position = open ? 'absolute' : '';
      nav.style.flexDirection = open ? 'column' : '';
      nav.style.top = open ? '72px' : '';
      nav.style.left = open ? '0' : '';
      nav.style.right = open ? '0' : '';
      nav.style.background = open ? 'var(--c-bg)' : '';
      nav.style.padding = open ? '16px 24px' : '';
      nav.style.borderBottom = open ? '1px solid var(--c-line)' : '';
    });
  };

  // ─────────────── boot ───────────────
  document.addEventListener('DOMContentLoaded', () => {
    reveal();
    animateCounters();
    initLang();
    initBooking();
    initParallax();
    initScrollParallax();
    initHamburger();
  });
})();
