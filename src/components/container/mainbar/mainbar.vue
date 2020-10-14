<template>
  <span>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="toggledrawer"></v-app-bar-nav-icon>
      <v-app-logo
        width="60"
        height="60"
      ></v-app-logo>
      <v-toolbar-title>
        <span>Cursos</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="menularge">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          :to="`/${$i18n.locale}${item.path}`"
          text
          exact
        >
          <v-icon
            size="25"
            left
            :color="item.color"
          >{{item.icon}}</v-icon>
          {{$t(item.title)}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              v-on="on"
            >
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :to="`/${$i18n.locale}${item.path}`"
              exact
            >
              <v-list-item-avatar>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-avatar>
              <v-list-item-action> {{$t(item.title)}}</v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
  </span>
</template>

<script>
import icon from '@/components/container/icon.vue'

export default {
  components: {
    'v-app-logo': icon
  },
  props: {
    value: {
      required: true,
      default: false,
    }
  },
  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-home',
        title: 'menu.home',
        color: 'primary',
        path: '/'
      },
      {
        icon: 'mdi-login',
        title: 'menu.signin',
        color: 'info',
        path: '/signin'
      }, {
        icon: 'mdi-check',
        title: 'menu.signup',
        color: 'success',
        path: '/signup'
      }
    ]
  }),
  computed: {
    m () {
      return this.$vuetify.breakpoint.name;
    },
    menularge () {
      if (this.m == 'lg' || this.m == 'xl' || this.m == 'md' || this.m == 'sm') {
        return true
      }
      return false
    }
  },
  watch: {
    drawer () {
      this.$emit('input', this.drawer)

    },
    value (v) {
      this.drawer = v
    }
  },
  methods: {
    toggledrawer () {
      this.drawer = !this.drawer;
    }
  },
  created () {
    this.drawer = this.value
  }
}
</script>
