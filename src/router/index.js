import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: `/${i18n.locale}/home`
    },
    {
        'path': '/:lang',
        component: {
            render (c) { return c('router-view'); }
        },
        'children': [
            {
                path: '/',
                redirect: 'home'
            },
            {
                path: 'home',
                name: 'home',
                component: Home,
                meta: {
                    title: i18n.messages[i18n.locale].home.title
                }
            },
            {
                path: 'about',
                name: 'about',
                component: Home,
                meta: {
                    title: 'Registrate'
                }
            },

            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
            /*
            {
                path: 'system',
                redirect: {
                    name: 'dashboard'
                },
                component: System,
                children: [{
                    path: 'dashboard',
                    name: 'dashboard',
                    component: Dashboard,
                    meta: {
                        title: 'Resumen'
                    }
                },
                {
                    path: 'users',
                    name: 'users',
                    component: Users,
                    meta: {
                        title: 'Usuarios'
                    }
                }
                ]
            }*/
        ]
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})







export default router

