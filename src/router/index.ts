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
        },
        {
            path: '/components',
            name: 'components',
            meta: {
                title: 'Components'
            },
            component: (): Promise<Component> => import('../views/ComponentsView.vue')
        },
        {
            path: '/components/icons',
            name: 'icons',
            meta: {
                title: 'Icons'
            },
            component: (): Promise<Component> => import('../views/components/IconsView.vue')
        },
        {
            path: '/movies',
            name: 'movies',
            meta: {
                title: 'Movies'
            },
            component: (): Promise<Component> => import('../views/MoviesView.vue')
        },
        {
            path: '/photos',
            name: 'photos',
            meta: {
                title: 'Photos'
            },
            component: (): Promise<Component> => import('../views/PhotosView.vue')
        }
    ]
});

export default router;
