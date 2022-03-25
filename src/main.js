import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Vue.mixin({
//   methods: {
//     capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
//   }
// })

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
