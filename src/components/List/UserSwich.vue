<template>
  <div class="swich">
    <span @click="changeCad" :class="cad">
        CADASTRO
    </span>
    <span @click="changeList" :class="list" >LISTAGEM</span>
    
  </div>
</template>

<script>
export default {  
    data() {
        return {
            cad:'off',
            list:'on',
            moviment: 'users',
            default: true
        }
    },  
    methods: {
        changeCad(){
            this.cad = 'on'
            this.list = 'off'
            this.default = false
            this.moviment = 'cadastro'
            this.$emit("changeCad",this.default)
        },

        changeList(){
            this.cad = 'off'
            this.list = 'on'
            this.default = true
            this.moviment = 'users'
            this.$emit("changeList",this.default)
        }

    },

}
</script>

<style  scoped>

    .swich{
        display:flex;
        justify-content: space-around;
        width: 22vw;
        height: 1vw;
        margin: 7vw 0 2vw 0%;
        position: absolute;
    }

    span{
        width: clamp(11vw, 4em + 22vw, 50vw);
        height:clamp(1.5vh,1vw + 1vh, 5vh);
        margin:0 1vw 0 1vw;
        text-align: center;
        padding:0 0.7em 0.7em 0.7em ;
        font-size: clamp(1vw,0.5em + 0.5vw, 1.5em);
        z-index: 1;
    }
    .off{
        color: rgb(65, 64, 64);
        border-bottom: solid 1px rgb(223, 219, 219);
        padding-bottom: clamp(1.5em, 1vw, 2.5em);
        font-weight: 70;
        z-index: 1;
    }
    .on{
        animation-name:turnOn ;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        font-weight: 500;
        border-radius:2vw;
        color:white;
        background-color: black;
    }
    @keyframes turnOn{
        from{background-color: rgb(255, 255, 255);}
        to{background-color: black;}
    }
    @keyframes  turnOff{
        from{ background-color: black;}
        to{ background-color: rgb(255, 255, 255);}
      }
</style>