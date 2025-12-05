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
        text: `Donner vie à mon projet`,
        link: `/contact/`
    },
    secondary: {
        text: `Mes créations`,
        link: `#portfolio`
    }
}

const services = [
    {
        id: 'web-dev',
        title: 'Développement Web',
        description: 'Sites web, applications, e-commerce. Du concept au déploiement, je crée des solutions digitales performantes.',
        icon: 'ri-code-s-slash-line',
        link: '/services/#web-dev'
    },
    {
        id: 'automation',
        title: 'Automatisation & Processus',
        description: 'Optimisez vos workflows. Emails, processus métiers, intégrations. Gagnez du temps sur les tâches répétitives.',
        icon: 'ri-loop-left-line',
        link: '/services/#automation'
    },
    {
        id: 'custom-apps',
        title: 'Applications Sur-Mesure',
        description: 'Solutions custom adaptées à vos besoins spécifiques. De la conception au déploiement.',
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