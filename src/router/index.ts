import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Home Page'
            }
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                title: 'About'
            },
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: (): Promise<Component> => import('../views/AboutView.vue')
        }
    ]
});

export default router;
