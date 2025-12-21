import { animate, stagger, inView } from 'motion';

// Configuration par défaut
const defaultConfig = {
  duration: 0.6,
  distance: 30,
  easing: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  staggerDelay: 0.1
};

// Types d'animations disponibles
type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur';

interface AnimationStyle {
  initial: Record<string, string | number>;
  final: Record<string, string | number>;
}

const animationTypes: Record<AnimationType, AnimationStyle> = {
  'fade-up': {
    initial: { opacity: 0, transform: 'translateY(30px)' },
    final: { opacity: 1, transform: 'translateY(0)' }
  },
  'fade-down': {
    initial: { opacity: 0, transform: 'translateY(-30px)' },
    final: { opacity: 1, transform: 'translateY(0)' }
  },
  'fade-left': {
    initial: { opacity: 0, transform: 'translateX(-30px)' },
    final: { opacity: 1, transform: 'translateX(0)' }
  },
  'fade-right': {
    initial: { opacity: 0, transform: 'translateX(30px)' },
    final: { opacity: 1, transform: 'translateX(0)' }
  },
  'scale': {
    initial: { opacity: 0, transform: 'scale(0.95)' },
    final: { opacity: 1, transform: 'scale(1)' }
  },
  'blur': {
    initial: { opacity: 0, filter: 'blur(10px)' },
    final: { opacity: 1, filter: 'blur(0px)' }
  }
};

// Initialiser les animations au chargement
export function initAnimations() {
  // Respecter prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Afficher tous les éléments sans animation
    document.querySelectorAll<HTMLElement>('[data-animate], [data-animate-item]').forEach((el) => {
      el.style.opacity = '1';
    });
    return;
  }

  // Animation simple avec type configurable
  document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
    const type = (el.getAttribute('data-animate') || 'fade-up') as AnimationType;
    const distance = parseFloat(el.getAttribute('data-distance') || String(defaultConfig.distance));
    const animation = animationTypes[type] || animationTypes['fade-up'];

    // Appliquer les styles initiaux avec distance custom
    let initialStyles = { ...animation.initial };
    if (type === 'fade-up') {
      initialStyles.transform = `translateY(${distance}px)`;
    } else if (type === 'fade-down') {
      initialStyles.transform = `translateY(-${distance}px)`;
    } else if (type === 'fade-left') {
      initialStyles.transform = `translateX(-${distance}px)`;
    } else if (type === 'fade-right') {
      initialStyles.transform = `translateX(${distance}px)`;
    }

    Object.entries(initialStyles).forEach(([prop, value]) => {
      el.style.setProperty(prop, String(value));
    });

    inView(el, () => {
      // Éviter le double déclenchement
      if (el.hasAttribute('data-animated')) return;
      el.setAttribute('data-animated', 'true');

      const delay = parseFloat(el.getAttribute('data-delay') || '0');
      const duration = parseFloat(el.getAttribute('data-duration') || String(defaultConfig.duration));

      animate(el, animation.final, {
        duration,
        delay,
        easing: defaultConfig.easing
      });
    }, { margin: '-100px' });
  });

  // Animation stagger (éléments multiples)
  document.querySelectorAll<HTMLElement>('[data-animate-stagger]').forEach((container) => {
    const children = container.querySelectorAll<HTMLElement>('[data-animate-item]');
    const type = (container.getAttribute('data-animate-stagger') || 'fade-up') as AnimationType;
    const animation = animationTypes[type] || animationTypes['fade-up'];

    children.forEach((child) => {
      Object.entries(animation.initial).forEach(([prop, value]) => {
        child.style.setProperty(prop, String(value));
      });
    });

    inView(container, () => {
      // Éviter le double déclenchement
      if (container.hasAttribute('data-animated')) return;
      container.setAttribute('data-animated', 'true');

      const staggerDelay = parseFloat(container.getAttribute('data-stagger-delay') || String(defaultConfig.staggerDelay));

      animate(children, animation.final, {
        duration: defaultConfig.duration,
        delay: stagger(staggerDelay),
        easing: defaultConfig.easing
      });
    }, { margin: '-100px' });
  });
}

// Auto-init
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initAnimations);
}
