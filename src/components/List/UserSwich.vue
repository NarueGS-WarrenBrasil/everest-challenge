<template>
  <div class="swich">
    <div class="swichBottom" :class="moviment"></div>
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
        margin-top: 10vw;
        margin-left: 10.5vw;
    }

    .swichBottom{
        background-color: black;
        width: 11vw;
        height: 1vw;
        position: absolute;
        z-index: 0;
        margin-left: 11vw;
        margin-top: -0.35vw;
        border-radius:1vw;
        animation-fill-mode: forwards;
        animation-duration: 0.5s;
        height: 1.3vw;
    }
    .users{
        animation-name:list;
    }

    .cadastro{
        animation-name:cad;
    }

  @keyframes list{
    from{margin-left:0vw}
    to{margin-left:11vw}
  }
  @keyframes cad{
    from{margin-left:11vw}
    to{margin-left:-11vw}
  }
    span{
        width: 22vw;
        height: 1vw;
        margin-top: -0.25vw;
        text-align: center;
        z-index: 1;
    }
    .off{
        color: rgb(65, 64, 64);
        border-bottom: solid 1px rgb(223, 219, 219);
        padding-bottom: 1.2vw ;
        font-weight: 70;
        z-index: 1;
    }
    .on{
        font-weight: 500;
        border-radius:2vw;
        color:white;
    }
    @keyframes turnOn{
        from{margin-left:11vw}
        to{margin-left:0vw}
    }
    @keyframes  first{
        from{ width: 0px;}
        to{ width: 372px;}
      }
</style>