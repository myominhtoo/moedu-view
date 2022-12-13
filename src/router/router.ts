import { createRouter , createWebHistory, RouteRecordRaw } from 'vue-router';
import TestPageVue from '../pages/TestPage.vue';


const routes: RouteRecordRaw [] = [
    {
        path : '/',
        component : TestPageVue
    }
];

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes 
});

export default router;