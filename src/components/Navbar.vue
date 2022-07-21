<template>
     <div id="navbar">
        <p id="title">CADASTRO DE USUÁRIO</p>
    </div>
</template>

<style>
   #arrow{
    width: 2vw;
    height: 2vw;
   }
    #navbar {
    background-color: rgb(255, 26, 95);
    display: flex;
    justify-content: center;
    padding-bottom: 0px;
    height:2.5vw;
    width: 100%;
    margin-bottom: 0%; 
    text-align: center;  
    color: azure; 
  }
  #title{
      font-size: clamp(0.1em,0.4rem + 0.4vw, 1em);
      font-weight: 700;
      margin-top:max(0.5vw);
    }
</style>

<script>
export default {
    methods: {
        Back(){
            this.$emit("Back")
        }
    },
}

</script>