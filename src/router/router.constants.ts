import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home'
        },
        // route level code-splitting
        // this generates a separate chunk (Home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: (): Promise<Component> => import('@/components/Home/VueHome.vue')
    },
    {
        path: '/styleguide',
        name: 'styleguide',
        meta: {
            title: 'Styleguide'
        },
        component: (): Promise<Component> => import('@/components/Styleguide/VueStyleguide.vue')
    },
    {
        path: '/styleguide/icons',
        name: 'icons',
        meta: {
            title: 'Icons'
        },
        component: (): Promise<Component> => import('@/components/Styleguide/VueStyleguideIcons.vue')
    },
    {
        path: '/styleguide/forms',
        name: 'forms',
        meta: {
            title: 'Forms'
        },
        component: (): Promise<Component> => import('@/components/Styleguide/VueStyleguideForms.vue')
    },
    {
        path: '/movies',
        name: 'movies',
        meta: {
            title: 'Movies'
        },
        component: (): Promise<Component> => import('@/components/Movies/VueMovies.vue')
    },
    {
        path: '/movies/:id',
        name: 'movie',
        meta: {
            title: 'Movie detail'
        },
        component: (): Promise<Component> => import('@/components/Movie/VueMovie.vue')
    },
    {
        path: '/photos',
        name: 'photos',
        meta: {
            title: 'Photos'
        },
        component: (): Promise<Component> => import('@/components/Photos/VuePhotos.vue')
    }
] as const satisfies readonly RouteRecordRaw[];
