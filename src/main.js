import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/imports.js'
import '@/assets/css/animate.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/styles.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import '@/assets/css/styles.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    vuetify,
    render: h => h(App)
}).$mount('#app')
