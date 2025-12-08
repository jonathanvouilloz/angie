const author = {
    name: `Jonathan Vouilloz`,
    nickname: `Jon Labs`,
    linkedin: `#`,
    github: `#`,
    email: `mailto:contact@jonlabs.ch`,
    location: `Genève, Suisse`
}

const cta = {
    primary: {
        text: `Discuter de mon projet`,
        link: `/contact/`
    },
    secondary: {
        text: `Voir mes réalisations`,
        link: `#portfolio`
    }
}

const services = [
    {
        id: 'web-dev',
        title: 'Création de Sites Web & E-commerce',
        description: 'Sites vitrines ultra-rapides (Astro) et boutiques en ligne. Je crée des expériences digitales qui convertissent les visiteurs en clients.',
        icon: 'ri-code-s-slash-line',
        link: '/services/#web-dev'
    },
    {
        id: 'automation',
        title: 'Automatisation & Processus Métiers',
        description: 'Faites travailler les robots à votre place. Je connecte vos outils (Make, Zapier, API) pour éliminer les tâches répétitives.',
        icon: 'ri-loop-left-line',
        link: '/services/#automation'
    },
    {
        id: 'custom-apps',
        title: 'Applications Web & SaaS Sur-Mesure',
        description: 'Votre besoin est unique ? Je développe des outils métiers, dashboards et MVPs spécifiques pour votre activité.',
        icon: 'ri-smartphone-line',
        link: '/services/#custom-apps'
    }
]

const techStack = [
    'Astro',
    'React',
    'Node.js',
    'Tailwind',
    'Figma',
    'Make',
    'Zapier',
    'Supabase',
    'PostgreSQL'
]

// Legacy export for backward compatibility
const buy = {
    title: `Voir sur GitHub`,
    link: `#`
}

export { author, cta, services, techStack, buy }