import Vue from 'vue'
import App from './App.vue'
import router from './router'

import JwPagination from 'jw-vue-pagination'
Vue.component('jw-pagination',JwPagination)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faXmark, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faEye, faXmark, faWhatsapp, faEnvelope)
Vue.component('f-icon', FontAwesomeIcon)

import VueMask from 'v-mask';
Vue.use(VueMask)

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    user: Model
  },
  seeds(server) {
    server.create("user", { fullname: "Ciquinha Gonzaga de Lima Mohamed Sauro dos Santos Ribeiro Hoffmn", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17",checkZap:true, checkSMS:true  })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", checkZap:true, checkSMS:false })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:true })
    server.create("user", { fullname: "Naruê Gonçalves Santos", cpf: "93525294050", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", checkZap:false, checkSMS:false })
    
  },
  routes() {
    this.namespace = 'api'
    
    this.get('/users', (schema, request) => {
      return schema.users.all()
    }, { timing: 0 } )

    this.post('/users', (schema, request) => {
      let user = JSON.parse(request.requestBody)
      console.log(schema.users.create(user))

      return schema.users.create(user)
    })

    this.get('/users/:id', (schema, request) => {
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