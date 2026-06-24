import enMainPage from './enMainPage.vue'
import uaMainPage from './uaMainPage.vue'

import { createWebHistory, createRouter } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'rootPage',
            component: enMainPage
        },
        {
            path: '/en',
            name: 'enPage',
            component: enMainPage
        },
        {
            path: '/ua',
            name: 'uaPage',
            component: uaMainPage
        },
    ]
})
export default router