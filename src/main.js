import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n.js'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/styles.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@babel/polyfill'
import '@/assets/css/animate.css'
import '@/plugins/imports.js'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  i18n,
  vuetify,
  mounted () { },
  render: h => h(App)
}).$mount('#app')
