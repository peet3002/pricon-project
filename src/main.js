import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Charaters from './components/Charaters.vue'
import CharacterBattle from './components/CharacterBattle.vue'

Vue.config.productionTip = false

Vue.component(Charaters.name, Charaters)
Vue.component(CharacterBattle.name, CharacterBattle)
Vue.use(Vuetify)

new Vue({
    router,
    store,
    render: (h) => h(App),
    vuetify: new Vuetify()
}).$mount('#app')
