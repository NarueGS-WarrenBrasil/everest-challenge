import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Maska from 'maska'
Vue.use(Maska)

import VueMask from 'v-mask';
Vue.use(VueMask)

import JwPagination from 'jw-vue-pagination'
Vue.component('jw-pagination',JwPagination)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faXmark, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faEye, faXmark, faWhatsapp, faEnvelope)
Vue.component('f-icon', FontAwesomeIcon)



import { createServer, Model } from 'miragejs'

createServer({
  models: {
    user: Model
  },

  routes() {
    this.namespace = 'api'
    
    this.get('/users', (schema, request) => {
      return schema.users.all()
    }, { timing: 0 } )

    this.post('/users', (schema, request) => {
      let user = JSON.parse(request.requestBody)
      return schema.users.create(user)
    })
    
    this.get('api/users/', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let user = schema.users.find(id)

      return user.update(data)
    }, { timing: 0 })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')