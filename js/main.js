(()=>{
  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const backTop = document.querySelector('.back-top');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  body.prepend(progress);

  const closeMenu = () => {
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Abrir menú');
    header?.classList.remove('menu-open');
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    header?.classList.toggle('menu-open', open);
  });
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  }, { passive: true });

  // Mark the current navigation item without changing its URL or page content.
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(link => {
    const linkPage = new URL(link.href, location.href).pathname.split('/').pop();
    if (linkPage === currentPage && linkPage) link.setAttribute('aria-current', 'page');
  });

  const targets = new Set(document.querySelectorAll([
    '.hero-content > .eyebrow', '.hero-content > h1', '.hero-content > .hero-copy', '.hero-content > .actions',
    '.page-hero .crumb', '.page-hero .eyebrow', '.page-hero h1', '.page-hero .summary',
    '.section-head', '.intro-grid > *', '.service-card', '.split-feature > .feature-image',
    '.split-feature > .feature-copy', '.pillar', '.cta-inner', '.contact-layout > *', '.prose'
  ].join(',')));

  if (!reducedMotion && 'IntersectionObserver' in window) {
    body.classList.add('js-ready');
    document.querySelectorAll('.service-grid,.pillars').forEach(group => {
      Array.from(group.children).forEach((item, index) => {
        item.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 75}ms`);
      });
    });
    targets.forEach(element => {
      element.classList.add('reveal');
      if (element.matches('.intro-grid > :first-child,.contact-layout > :first-child,.feature-image')) {
        element.classList.add('from-left');
      } else if (element.matches('.intro-grid > :last-child,.contact-layout > :last-child,.feature-copy')) {
        element.classList.add('from-right');
      }
      if (element.matches('.feature-image,.feature-copy') && element.closest('.split-feature.reverse')) {
        element.classList.toggle('from-left', element.matches('.feature-copy'));
        element.classList.toggle('from-right', element.matches('.feature-image'));
      }
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Keep observing after entry so the transition reverses naturally on scroll-up.
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(element => observer.observe(element));
  } else {
    targets.forEach(element => element.classList.add('is-visible'));
  }

  const parallaxTargets = Array.from(document.querySelectorAll('.hero,.page-hero,.photo-frame,.feature-image'));
  let scheduled = false;
  let previousY = window.scrollY;
  const updateFrame = () => {
    const y = window.scrollY;
    const delta = y - previousY;
    if (Math.abs(delta) > 2) body.classList.toggle('scrolling-up', delta < 0);
    previousY = y;

    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    const progressValue = scrollRange > 0 ? Math.max(0, Math.min(1, y / scrollRange)) : 0;
    progress.style.transform = `scaleX(${progressValue})`;
    header?.classList.toggle('scrolled', y > 28);
    backTop?.classList.toggle('show', y > 520);

    if (!reducedMotion) {
      const measurements = parallaxTargets.map(element => ({ element, rect: element.getBoundingClientRect() }));
      measurements.forEach(({ element, rect }) => {
        if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;
        const offset = -(rect.top + rect.height * 0.5 - window.innerHeight * 0.5) * 0.032;
        const safeOffset = Math.max(-18, Math.min(18, offset));
        element.style.setProperty('--parallax-y', `${safeOffset.toFixed(1)}px`);
      });
    }
    scheduled = false;
  };
  const requestFrame = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateFrame);
  };
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame, { passive: true });
  updateFrame();

  backTop?.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
})();
