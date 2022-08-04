<template>
  <div class="formContainer">
    <div class="nameContainer">
        <div class="header">
            <h1>Dados de contato</h1>
            <span>Informações inportantes sobre vc!</span><br>
        </div>
      <label>Nome Completo</label><br>
      <input placeholder="Nome Completo" type="text" class="bigField" v-model="newUser.fullName">
      <div ref="nameError" class="error"></div>
    </div>
    <div class="row1">
      <ol>
        <li>
          <label >Email</label><br>
          <input type="email"  v-model="newUser.email">
          <div ref="emailError" class="error" ></div>
        </li>
        <li>
          <label>CPF</label><br>
          <input type="text" v-maska="'###.###.###-##'"  v-model="newUser.cpf">
          <div ref="cpfError" class="error" ></div>
        </li>
        <li>
          <label>Data de anscimento</label><br>
          <input type="date" v-model="newUser.birthDate">
          <div ref="dateError" class="error" ></div>
        </li>
      </ol>
    </div>
    <div class="row2">
      <ol>
        <li>
          <label>Confirm e-mail</label><br>
          <input type="text"  v-model="newUser.confirmEmail">
          <div ref="email2Error" class="error" ></div>
        </li>
        <li>
          <label for:bigField>Celular</label><br>
          <input type="text" v-maska="'+55(##)#####-####'" v-model="newUser.phone">
          <div ref="phoneError" class="error"></div>
        </li>
      </ol>
    </div>
    <div class="checkBox">
        <p>Quer ficar por dentro de todas as novidades?</p>
        <input type="checkbox" v-model="newUser.checkZap" class="checkin" name="whats">
        <span>Whatsapp</span><br>
        <input type="checkbox" v-model="newUser.checkSMS" class="checkin" name="whats">
        <span>Email e SMS</span>
    </div><br>
    <registerSubmit @cancelForm="leave" @confirmForm=" createUser(newUser)" />
  </div>
</template>

<script>
import registerSubmit from "./registerSubmit.vue"
import msgs from "@/utils/formErrorMsgs"
import formValidate from "@/utils/formValidate"
import axios from "axios"
import router from '@/router'
export default {
data(){
    return{
        newUser:{
            fullName: "",
            email: "",
            cpf:"",
            birthDate:"",
            confirmEmail: "",
            phone:"",
            checkZap: false,
            checkSMS: false,
        },
    }
},
components:{
    registerSubmit
},
  methods: {
     cpfClean(){
        let rawCPF = this.newUser.cpf.replaceAll('.', '').replace('-', '')
        return rawCPF
    },
    async createUser(user){
        try{
        let key = 0
        const fields = formValidate.validateAny(user)
        const elementArray = Object.keys(this.$refs)
        for(let i =0;i<elementArray.length;i++){
            this.$refs[elementArray[i]].innerHTML = ""
        }
        fields.errors.map((value) => {
            if ([0, 1, 2, 3, 4, 5].includes(value)){
                this.$refs[elementArray[value]].innerHTML = msgs.blank
            }
        })
        fields.check.map((value) => {
            if (value == 0){
              if(formValidate.vNormalString(this.newUser.fullName)){this.$refs[elementArray[value]].innerHTML = "", key += 1 }
              else{this.$refs[elementArray[value]].innerHTML = msgs.invalidName}
            }
            if(value == 1){
              if(formValidate.vEmail(this.newUser.email)){this.$refs[elementArray[value]].innerHTML = "", key += 1 }
              else{this.$refs[elementArray[value]].innerHTML = msgs.invalidEmail}
            }
            if(value == 2){
              if(formValidate.vCPF(this.cpfClean(this.newUser.cpf))){this.$refs[elementArray[value]].innerHTML = "", key += 1 }
              else{this.$refs[elementArray[value]].innerHTML = msgs.invalidCPF}
            }
            if(value == 3){this.$refs[elementArray[value]].innerHTML = "",key += 1,alert(key)
            }
            if(value == 4){
              if(this.newUser.confirmEmail == this.newUser.email){this.$refs[elementArray[value]].innerHTML = "", key += 1,alert(key)}
              else{this.$refs[elementArray[value]].innerHTML = msgs.diferent
                this.$refs[elementArray[1]].innerHTML = msgs.diferent
              }
            }
            if(value == 5){
              if(this.newUser.phone.length == 17){ this.$refs[elementArray[value]].innerHTML = "", key += 1}
              else{this.$refs[elementArray[value]].innerHTML = msgs.invalidPhone}
            }
        })
        if(key != 6){
            throw "Form Error" 
        }        
        else{
            const article = {fullname: user.fullName, cpf: user.cpf, phone: user.phone, email: user.email, confirmEmail: user.confirmEmail, birthDate: user.birthDate, checkZap:user.checkZap, checkSMS:user.checkSMS};
            const response = await axios.post("/api/users", article)
            this.$router.push('/')
          }
        }
      catch(error){
        console.log(error)
      }
    },
    leave(){
        this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.formContainer {
    animation-name: formIn;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    display: grid;
    margin: 10% 0 0 27%;
    grid-template-areas: 'nome nome';
    width: 45vw;
    height: 30vh;
}

@keyframes formIn {
    from{margin: 9% 0 0 27%; opacity: 0%;}
    to{margin: 10% 0 0 27%; opacity: 100%;}
}

.header{
    margin-bottom:0.5vw;
}

label{
  position:relative;
  z-index: 3;
  background-color: white;
  margin:1vw
}

input{
  padding-left:2vw;
  
}

.row1{
  width: 87%;
}
.row2{
  margin-left:-1vw;
}
li{
  list-style:none;
  margin: 2vh 0 4vh 0
}


li > input{
  position:relative;
  z-index: 2;
  margin-top:-0.5vw;
  width: 100%;
  height: 6vh;
}

.bigField{
  width: 100%;
  margin-top:-0.5vw;
  height: 6vh;
  grid-area: nome;
}

.nameContainer {
  grid-area: nome; 
  margin-bottom: 1vw; 
}

.checkin{
    width: 5%;
    margin: 0.5vw 0 0 0
}

.footerBox{
    border:solid 1px;
    width: 100%;
}

.error{
    color:red;
    position: absolute;
    margin-bottom: 1vw;
}

</style>