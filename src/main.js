import Vue from 'vue'
import {
  createPinia,
  PiniaVuePlugin
} from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import apis from '@/apis'
import '@/common/flexible'

import VConsole from 'vconsole/dist/vconsole.min.js'
new VConsole()

Vue.use(PiniaVuePlugin)

Vue.prototype.$apis = apis

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app')
