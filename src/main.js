import Vue from 'vue'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'
import store from './store'
import Charaters from './components/Charaters.vue'
import CharacterBattle from './components/CharacterBattle.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.component(Charaters.name, Charaters)
Vue.component(CharacterBattle.name, CharacterBattle)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
