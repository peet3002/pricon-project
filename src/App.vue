<template>
  <v-app
    id="app"
    :style="css"
  >
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <!-- <div id="app">
    <router-view />
  </div> -->
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'App',
    computed: {
        ...mapState({
        }),
        ...mapGetters({
        })
    },
    // eslint-disable-next-line vue/order-in-components
    data () {
        return {
            itemmenu: [],
            MenuVal: {},
            isProcess: false,
            css: {}
        }
    },
    async created () {
        // this.css = {
        //     backgroundColor: '#323232',
        //     backgroundImage: `url('${require('@/assets/bg.webp')}')`,
        //     backgroundPosition: 'center center',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     backgroundAttachment: 'fixed'
        // }
    },
    methods: {
        ...mapActions({
        })
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
