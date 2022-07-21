<template>
<div class="box">
<NewButtom class="newButton" />
  <div v-show="hasUsers" class="list_box">
    <ul>
      <h3>CPF</h3>
      <div class="itens_box">
        <li class="list" v-for="user in pageOfItems" :key="user.id">
          {{user.cpf | VMask(mask)}}
        </li>
      </div>
    </ul>
      
    <ul>
      <h3>Nome Completo</h3>
      <div class="itens_box">
        <li class="namesList" v-for="user in pageOfItems" :key="user.id">
          <span class="fullname">{{user.fullname}}</span>
          <f-icon @click="sendUserDatails(user)" icon="fa-solid fa-eye"  class="eye"/>
        </li>
      </div>
    </ul>
  </div>
  <div v-show="!hasUsers" class="noUser">
    <NothingHere />
    <h1 class="noUserMsg">Nada por aqui</h1>
  </div>
  <div class="pagBox">
    <jw-pagination :maxPages="3" :pageSize="limit" :labels="menuLabels"  :items="usersList" @changePage="onChangePage"></jw-pagination>
  </div>
</div>
</template>

<script>

const menuLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

import axios from 'axios'
import NewButtom from '@/components/List/NewButtom.vue'
import NothingHere from "../NothingHere.vue"
export default {
    data() {
        return {
            pageOfItems:[],
            usersList:[],   
            mask: 'AAAAAAAAAA',
            limit:6,
            menuLabels,
            hasUsers:true,
        };
    },
    components:{
      NewButtom,
      NothingHere
    },

    
    created() {
      this.getUser()
    },
    methods: {
        onChangePage(User) {
            this.pageOfItems = User;
        },
        sendUserDatails(info){
          this.$emit("sendUser",info)
        },

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
          
        }
    }
}
</script>
<style scoped>
  .box{
    position: absolute;
    animation-name: boxIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    width: auto;
    height: auto;
  }

  @keyframes boxIn{
    from{margin:8vw; opacity: 0%;}
    to{margin:10vw;opacity: 100%;}
  }

  .list_box{
    width: 45vw;
    padding: 0.5vw;
    display:grid;
    grid-template-columns: 40% 60%;
    margin-top: 15vh
  }

  .newButton{
    margin:3vh 0 0 1.5vh
  }

  li{
    margin: 2vw 0vw 1vw 0;
    font-weight: 100;
    list-style: none;
    font-size: clamp(1vw,0.5em + 0.5vw, 1.5em);
  }

  h3{
    border-top: solid 1px rgb(223, 219, 219);
    border-bottom: solid 1px rgb(223, 219, 219);
    padding: 1vw 0 1vw 2vw;
    font-size: clamp(1vw,0.5em + 0.5vw, 1.5em);
  }
  
  .namesList{
    display:flex;
    justify-content: space-between;
  }

  .fullname{
    text-overflow: ellipsis;
    overflow: hidden;
    width: 20vw;
    white-space: nowrap; 
  }

  .itens_box{
    margin-left:2vw
  }

  .eye:hover{
    color:rgb(255, 0, 76);
    transform: translateZ(10px) scale(1.5);
  }

  .pagBox{
    width: 100.2%;
    text-align: center;
    margin-top:1vw;
    font-size: clamp(1vw,0.5em + 0.5vw, 1.5em);;
  }

  .noUser{
    margin-top:5vw;
    width:37vw;
    display: flex;
    justify-content: center;
  }

  .noUserMsg{
    position: absolute;
    width:37vw;
    height: 17vh;
    text-align: center;
    margin-top:10vh;
    padding-top:4vh;
    color:white;
    margin-left: 3vw;
    background-color: rgba(0, 0, 0, 0.757);
  }

@media (max-width:562px){
  .list_box{
    width: 60vw;
  }

}
</style>

