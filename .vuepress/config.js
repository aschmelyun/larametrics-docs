module.exports = {
    title: 'Larametrics',
    head: [
        [
            'link', {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon.png'
            }
        ]
    ],
    themeConfig: {
        logo: '/larametrics-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Docs', link: '/docs/' },
            { text: 'Github', link: 'https://github.com/aschmelyun/larametrics', isOutbound: true }
        ],
        sidebar: {
            '/docs/': getSidebarConfig('Docs')
        }
    }
}

function getSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'config-reference',
                'support'
            ]
        }
    ]
}