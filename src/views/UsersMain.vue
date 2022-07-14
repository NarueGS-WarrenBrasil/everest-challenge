<template>
<div class="content">
  <UserSwich class="ListSwich" @changeCad="change" @changeList="change" />
  <UserCad v-show="!swich"/>
  <Pagination v-show="swich"/>
</div>
</template>

<script>

import Pagination from "@/components/List/Pagination.vue"
import UserSwich from "../components/List/UserSwich.vue"
import UserCad from "@/components/List/UserCad.vue"
  export default {
    
    name: "app",
    components:{
      UserSwich,
      Pagination,
      UserCad
    },
    
    methods: {
      change(value){
        this.swich = value
      }
    },
    data() {
      return {        
        swich:true
      }
    },

    
  }

</script>

<style scoped>
.content{
    padding-left: 2em;
    margin-left: 27%;
    width: 45.2vw;
    align-content: center;
  }

  .ListSwich{
    margin-bottom: 1vw
  }

  *{
    font-size: min(24px,1vw);
  }

</style>