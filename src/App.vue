<template>
  <v-app id="inspire">
    <v-main>
      <!-- Barra e navegacion -->
      <v-app-nav v-model="drawer"></v-app-nav>
      <v-app-main-bar v-model="drawer"></v-app-main-bar>
      <transition name="box-fade">
        <router-view></router-view>
      </transition>
    </v-main>

    <v-app-footer></v-app-footer>

  </v-app>
</template>

<script>
import mainbar from '@/components/container/mainbar/mainbar.vue'
import navbar from '@/components/container/sidebar/sidebar.vue'
import footer from '@/components/container/footer/footer.vue'
import common from '@/lib/common.js'

export default {
  components: {
    "v-app-main-bar": mainbar,
    "v-app-nav": navbar,
    "v-app-footer": footer
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    pass: 'Tvxq1aca.',
    counternum: 0

  }),
  computed: {
    pstrength () {
      return common.passStrength(this.pass)
    },
    pdata () {
      if (this.pstrength === false) {
        let pvalue = ['baja', 'media', 'alta'];
        return pvalue[this.pstrength]
      } else {
        return ''
      }
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

