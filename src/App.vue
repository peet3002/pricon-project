<template>
  <v-app>
    <header>
      <Header />
    </header>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters({
    }),
  },
  methods: {
    ...mapActions({
    }),
  },
}
</script>

<style lang="scss">
* {
  font-family: 'Kanit', sans-serif;
  box-sizing: border-box;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
