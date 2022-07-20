<template>
<div>
  <div class="content">

  
  <UserCad v-show="!swich"/>
  <Pagination @sendUser="createModal" v-show="swich"/>
  
  </div>
  <UserModal @byeModal="closeModal" :User="userData" v-show="showModal"/>
</div>

</template>

<script>

import Pagination from "@/components/List/Pagination.vue"
import UserCad from "@/components/List/UserCad.vue"
import UserModal from "@/components/UserModal.vue"
  export default {
    
    name: "app",
    components:{
      Pagination,
      UserCad,
      UserModal
    },
    
    methods: {
      createModal(userInfo){
        this.userData = userInfo
        this.showModal = true
      },

      closeModal(){
        this.showModal = false
      }

    },
    data() {
      return {        
        swich:true,
        showModal:false,
        userData:{},
      }
    },

    
  }

</script>

<style scoped>


.content{
    padding-left: 2em;
    width: 100%;
    justify-content: center;
    display: flex;
  }

.ListSwich{
    margin-bottom: 1vw
  }



</style>