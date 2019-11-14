<template>
  <v-app id="inspire">
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :top="snackbar.top"
      :right="snackbar.right"
      :timeout="snackbar.timeout"
    >
      <v-icon>{{ snackbar.icon }}</v-icon>{{ snackbar.text }}
    </v-snackbar>

    <v-navigation-drawer v-model="drawer" app clipped >
      <v-list dense>
        
        <v-list-item link 
          @click="$router.push(section.route)"
          v-for="section in sections" :key="section.id"
        >
          <v-list-item-action>
            <v-icon>{{ section.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ section.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link
          @click="logout"
          v-if="auth"
        >
          <v-list-item-action>
            <v-icon>mdi-arrow-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Curso de Vuex ORM con Vuetify</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid >
        <v-layout justify-center align-center >
          <router-view />
        </v-layout>

      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { users, comments, posts } from '@/database/data';
import User from '@/database/models/User'

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    snackbar: {
      show: false,
      color: '',
      mode: '',
      timeout: 6000,
      text: '',
      top: true,
      right:true,
      icon: null
    }
  }),
  async created () {
    this.$vuetify.theme.dark = true
    await this.$store.dispatch('entities/users/create', { data: users });
    await this.$store.dispatch('entities/posts/create', { data: posts });
    await this.$store.dispatch('entities/comments/create', { data: comments });
    
    const user = User.query().with('posts').find(2);
    //console.log(user);
  },
  computed: {
    auth: {
      get() {
        return this.$store.getters['entities/auth/find'](1)
      },
      set (val) {

      }
    },
    sections () {      
      if (!this.auth) {
        return [
          { id:2, name:'Iniciar sesión', route: '/login', icon: 'mdi-call-made', auth: false },
          { id:3, name:'Regístrate', route: '/register', icon: 'mdi-account-plus', auth: false },
        ]
      }
      return [
        { id:2, name:'Blog', route: '/blog', icon: 'mdi-format-list-bulleted', auth: true },
        { id:3, name:'Perfil', route: '/profile', icon: 'mdi-account-box', auth: true },
      ]
    }
  },
  mounted () {
    this.$updateBus.$on('showSnackBar', (snackbar) => {
      this.snackbar = Object.assign(this.snackbar, snackbar);
    })
  },
  methods: {
    logout () {
      this.auth.$deleteAll();
      this.$updateBus.$emit('showSnackBar', {
          show: true,
          color: 'success',
          text: 'Sesión cerrada correctamente',
          icon: 'mdi-check'
      });
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="stylus">
  body
    .container
      background darkslategrey 
      color: #fff
</style>
