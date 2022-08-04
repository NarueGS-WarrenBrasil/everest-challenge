<template>
<div class="footerContent">
    <button class="submit" @click="confirmForm">Cadastrar</button>
    <button class="cancel" @click="cancelForm">Cadastrar</button>
</div>
</template>
<script>
export default {
    methods: {
        confirmForm(){
            this.$emit("confirmForm")
        },
        cancelForm(){
            this.$emit("cancelForm")
        },
    },
}
</script>

<style>

.submit{
    background-color: rgb(255, 26, 95);
    border: none;
    border-radius: 9px;
    color:white;
    margin-right: 1%;
}
.submit:hover{
    background-color: rgb(255, 255, 255);
    border: solid 1px rgb(255, 26, 95);
    color: rgb(255, 26, 95)
  }

.cancel{
    background-color: rgb(255, 255, 255);
    border: solid 1px rgb(212, 210, 210);
    border-radius: 9px;
    color:rgb(255, 26, 95);;
}
.cancel:hover{
    background-color: rgb(255, 255, 255);
    border: solid 1px rgb(255, 26, 95);
    color:rgb(0, 0, 0);
}

button{
    width:8em;
    height:2.5em;
    font-size: 1vw;
    font-weight: 700;
    background-color: rgb(255, 26, 95);
    border: none;
    border-radius: 9px;
    color:white;
  }

.footerContent{
    width: 180%;
    margin:16% 0 0 0;
    display:flex;
    justify-content: center;
}
</style>