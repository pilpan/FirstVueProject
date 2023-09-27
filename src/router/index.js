import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue';
import FormView from '../views/Formview.vue';
import NewView from '../views/NewView.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: HomeView,
        },
        {
            path: '/form',
            name: 'FromPage',
            component: FormView,
        },
        {
            path: '/counter',
            name: 'CounterPage',
            component: NewView,
        }
    ]
})

export default router