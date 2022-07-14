<template>
<div class="box">
  <NewButtom />
  <div class="list_box">
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
          {{user.fullname}}
          <f-icon icon="fa-solid fa-eye"  class="eye"/>
        </li>
      </div>
    </ul>
  </div>
  <div class="pagBox">
    <jw-pagination :pageSize="limit" :labels="MenuLabels"  :items="Users" @changePage="onChangePage"></jw-pagination>
  </div>
</div>
</template>

<script>
const MenuLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

import axios from 'axios'
import NewButtom from '@/components/List/NewButtom.vue'
export default {
    data() {
        return {
            pageOfItems:[],
            Users:[
              { fullname: '...', cpf: 'Carregando' },
              { fullname: '...', cpf: 'Carregando' },
              { fullname: '...', cpf: 'Carregando' },
              ],   
              mask: 'AAAAAAAAAA',
              limit:6,
              MenuLabels,
        };
    },
    components:{
      NewButtom
    },
    created() {
      try{
        this.getUser()
      }
      catch(error){
        console.log(error)
      }
    },
    methods: {
        onChangePage(User) {
            this.pageOfItems = User;
        },

        async getUser(){
          const response = await axios.get("/api/users")
          this.Users = await response.data.users
          this.mask = '###.###.###-##'
        }
    }
};
</script>
<style scoped>
  .box{
    animation-name: boxIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes boxIn{
    from{margin:10vw; opacity: 0%;}
    to{margin:0vw;opacity: 100%;}
  }
  li{
    margin: 1vw 0 1vw 0;
    font-weight: 100;
    list-style: none;
    font-size:110%
  }

  h3{
    border-top: solid 1px rgb(223, 219, 219);
    border-bottom: solid 1px rgb(223, 219, 219);
    padding: 1vw 0 1vw 2vw; 
  }

  .list_box{
    width: 42.2vw;
    padding: 0.5vw;
    display:grid;
    grid-template-columns: 40% 60%;
  }

  .eye:hover{
    color:rgb(255, 0, 76);
    transform: translateZ(10px) scale(1.5);
  }
  .namesList{
    display:flex;
    justify-content: space-between;

  }

  .itens_box{
    margin-left:2vw
  }

  .pagBox{
    width: 42.2vw;
    text-align: center;
  }

  
</style>

