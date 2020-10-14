import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/plugins/i18n'

// Paginas
import Home from '@/views/home.vue'
import Signin from '@/views/signin.vue'
import Signup from '@/views/signup.vue'
import Training from '@/views/training.vue'
import About from '@/views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}/`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      /*
            {
              path: '/',
              redirect: '/'
            },
      */
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          title: 'Inicio'
        }
      },
      {
        path: 'signin',
        name: 'signin',
        component: Signin,
        meta: {
          title: 'Inicio'
        }
      },
      {
        path: 'signup',
        name: 'signup',
        component: Signup,
        meta: {
          title: 'Inicio'
        }
      },
      {
        path: 'training',
        name: 'training',
        component: Training,
        meta: {
          title: 'Training'
        }
      },
      {
        path: 'about',
        name: 'about',
        component: About,
        meta: {
          title: 'Resumen'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
