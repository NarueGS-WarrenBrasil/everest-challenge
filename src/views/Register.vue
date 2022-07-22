<template>
  <div class="formContainer">
    <div class="nameContainer">
      <label>Nome Completo</label><br>
      <input type="text" class="bigField" v-model="newUser.fullname">
    </div>
    <div class="row1">
      <ol>
        <li>
          <label >Email</label><br>
          <input type="text"  v-model="newUser.email">
        </li>
        <li>
          <label>CPF</label><br>
          <input type="text" v-maska="'###.###.###-##'"  v-model="newUser.cpf">
        </li>
        <li>
          <label for:bigField>Data de anscimento</label><br>
          <input type="date" v-model="newUser.birthDate">
        </li>
      </ol>
    </div>
    <div class="row2">
      <ol>
        <li>
          <label for:bigField>Confirm e-mail</label><br>
          <input type="text"  v-model="newUser.confirmEmail">
        </li>
        <li>
          <label for:bigField>Celular</label><br>
          <input type="text" v-maska="'+55(##)#####-####'" v-model="newUser.phone">
        </li>
      </ol>
    </div>
    <button @click="createUser(newUser)">Cadastrar</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      newUser:{
        fullName: "",
        email: "",
        cpf:"",
        birthDate:"",
        confirmEmail: "",
        phone:""
      }
    }
  },
  created() {
    this.getUser()
  },

  methods: {
    async getUser(){
      try{
        const response = await axios.get("/api/users")
        this.usersList = await response.data.users
        this.mask = '###.###.###-##'
        if(this.usersList.length == 0){
          this.hasUsers = false
        }
      }
      catch(error){
        console.log(error)
      }
    },

    async createUser(user){
      console.log(user)
      try{
        const article = {fullname: user.fullname, cpf: user.cpf, phone: user.phone, email: user.email, confirmEmail: user.confirmEmail, birthDate: user.birthDate, checkZap:user.checkZap, checkSMS:user.checkSMS};
        const response = await axios.post("/api/users", article)
        this.$router.push("/")
      }
      catch(error){
        console.log(error)
      }
    }    
  },

}
</script>

<style scoped>



.formContainer {
  display: grid;
  margin-top: 10%;
  grid-template-areas: 'nome nome';
  width: auto;
  height: 30vh;
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
  margin-right: 2vw;
}

li{
  list-style:none;
  margin: 5vh 0 5vh 0
}


li > input{
  position:relative;
  z-index: 2;
  margin-top:-0.5vw;
  width: 100%;
  height: 6vh;

}

.bigField{
  width: 45vw;
  margin-top:-0.5vw;
  height: 6vh;
  grid-area: nome;
}

.nameContainer {
  grid-area: nome;  
}


button{
  width: 30%;
}



/* 
input{
  z-index: ;
}

label{
  z-index: 4;

}
.formContainer{
  width: auto;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.221);
  margin-top: 10%;
  display:grid;
  grid-template-areas: "nome nome";
  z-index: 1;
}

.bigField{
  border:solid 1px;
  width: 45vw;
  height: 6vh;
  margin-top:-2vw;
  grid-area: nome;
}

.inputContainer{
  border:solid 1px;
  height: auto;


} */

</style>