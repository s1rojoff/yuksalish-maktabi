export const routers = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('@/views/News.vue')
    },
    {
        path: '/galery',
        name: 'Galery',
        component: () => import('@/views/Galery.vue')
    },
    {
        path: '/tests',
        name: 'Tests',
        component: () => import('@/views/OnlineTest.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
    }
]