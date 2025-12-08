import { animate, stagger, inView } from 'motion';

// Configuration par défaut
const defaultConfig = {
  duration: 0.6,
  distance: 30,
  easing: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  staggerDelay: 0.1
};

// Initialiser les animations au chargement
export function initAnimations() {
  // Animation simple (fade-in)
  document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = `translateY(${defaultConfig.distance}px)`;

    inView(el, () => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0');
      animate(el,
        { opacity: 1, transform: 'translateY(0)' },
        { duration: defaultConfig.duration, delay, easing: defaultConfig.easing }
      );
    }, { margin: '-100px' });
  });

  // Animation stagger (éléments multiples)
  document.querySelectorAll<HTMLElement>('[data-animate-stagger]').forEach((container) => {
    const children = container.querySelectorAll<HTMLElement>('[data-animate-item]');

    children.forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = `translateY(${defaultConfig.distance}px)`;
    });

    inView(container, () => {
      animate(children,
        { opacity: 1, transform: 'translateY(0)' },
        {
          duration: defaultConfig.duration,
          delay: stagger(defaultConfig.staggerDelay),
          easing: defaultConfig.easing
        }
      );
    }, { margin: '-100px' });
  });
}

// Auto-init
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initAnimations);
}
