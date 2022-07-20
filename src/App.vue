<template>
  <div id="app">
    <div class="staticContent">
      <Navbar />
      <UserSwich  @changeCad="change" @changeList="change" />
    </div>
    <div class="view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import UserSwich from "@/components/List/UserSwich.vue"

export default {
  name: 'App',
  data() {
    return {
      headerTitle: "Usuários"
    }

  },
  components: {
    Navbar,
    UserSwich
  },
  methods: {
    change(value){
      if(!value){
        this.$router.push("/register")
      }
      else{
        this.$router.push("/")
      }
        
      },
  },
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
  .staticContent{
    display: flex;
    justify-content: center;
    width: 100%;
    height:24vh;
    margin-bottom: -17vh;
    position: absolute;
  }

  .view-container{
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
  }

.ListSwich{
    margin:0vw 0vw 1vw 5vw
  }
</style>
