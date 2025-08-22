import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import StoreView from '@/views/StoreView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/store', component: StoreView },
    { path: '/404', component: NotFoundView },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;