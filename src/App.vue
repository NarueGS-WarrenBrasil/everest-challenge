<template>
  <div id="app">
    <div class="staticContent">
      <Navbar />
    </div>
    <div class="view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Navbar,
  },
  methods: {
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
    width: 100%;
    position: absolute;
    
  }


</style>
