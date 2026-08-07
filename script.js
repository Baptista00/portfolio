const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const backToTopButton = document.getElementById('btn-topo');
const year = document.getElementById('ano');

function setMenuState(isOpen) {
    if (!navToggle || !navLinks) {
        return;
    }

    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    navLinks.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
    });

    navItems.forEach((item) => {
        item.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 980) {
            setMenuState(false);
        }
    });
}

if (year) {
    year.textContent = new Date().getFullYear();
}

if (backToTopButton) {
    const updateBackToTopVisibility = () => {
        const shouldShow = window.scrollY > 480;
        backToTopButton.classList.toggle('is-visible', shouldShow);
        backToTopButton.setAttribute('aria-hidden', String(!shouldShow));
    };

    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    updateBackToTopVisibility();

    backToTopButton.addEventListener('click', () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
}
