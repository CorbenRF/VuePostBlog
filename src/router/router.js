import Main from '@/pages/Main'
import { createRouter, createWebHistory } from 'vue-router'
import PostPage from '@/pages/PostPage'
import PostPageWithStore from '@/pages/PostPageWithStore'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi'
import About from '@/pages/About'
import PostIdPage from '@/pages/PostIdPage'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;