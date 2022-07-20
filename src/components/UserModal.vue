<template>
<div class="all">
    <div class="modal-shadow" @click="byeModal">
    </div>
    <div class="modal-content" >
        <div class="modal-top">
            <span class="title">Detalhes do usuário</span>
            <f-icon class="xIcon" @click="byeModal" icon="fa-solid fa-xmark fa-2xl" />
        </div>
        <div class="user-data">
            <ul>
                <div class="userItem">
                    <span>Nome Completo</span>
                    <li class="bigField">{{User.fullname}}</li>
                </div>
                 <div class="userItem">
                    <span>CPF</span>
                    <li>{{User.cpf | VMask(cpfMask)}}</li>
                 </div>
                <div class="userItem">
                    <span>Nascimento</span>
                    <li>{{User.birthDate}}</li>
                </div>
            </ul>
            <ul>
                <div class="userItem">
                    <span>Telefone</span>
                    <li>{{User.phone | VMask(phoneMask)}}</li>
                </div>
                <div class="userItem">
                    <span>Contato</span>
                    <li v-show="User.checkZap && !User.checkSMS">
                        <f-icon icon="fa-brands fa-whatsapp" />
                        Whatsapp
                    </li>
                    <li v-show="User.checkSMS && !User.checkZap">
                        <f-icon  icon="fa-solid fa-envelope" />
                        Email e SMS
                        <br>
                    </li>
                    <li v-show="User.checkZap && User.checkSMS">
                        <f-icon icon="fa-brands fa-whatsapp" />
                        Whatsapp
                        <br>
                        <f-icon  icon="fa-solid fa-envelope" />
                        Email e SMS
                        <br>
                    </li>
                    <li v-show="!User.checkZap && !User.checkSMS">
                        Não abilitado
                    </li>
                </div>
                <div>
                    <span>Email</span>
                    <li class="bigField">{{User.email}}</li>
                </div>
            </ul>
        </div>        
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            cpfMask:"###.###.###-##",
            phoneMask:"+55(##)#####-####",
            get:false
            

        }
    },
    props:{
        User:{
            type:Object,
        }
    },

    methods: {
        byeModal(){
            this.$emit("byeModal")
        },

    },
}
</script>

<style scoped>

    *{
        font-size: clamp(1vw,0.5em + 0.5vw, 1.5em);
    }

    .all{
        display:flex;
        justify-content: center;
    }
    .modal-shadow{
        width: 100%;
        height: 43.35vw;
        position: absolute;
        z-index: 1;
    }

    .modal-content{
        border-radius: 0.5vw;
        width: 30vw;
        height: 21.5vw;
        top: 4vw;
        background-color: rgb(255, 255, 255);
        position: absolute;
        align-content: center;
        z-index: 2;
        box-shadow: 0 0 0 1000vw rgba(0, 0, 0, 0.517);

    }  
    
    .modal-top{
        width: 100%;
        height: 3.3vw;
        font-weight: 700;
        display: flex;
        justify-content: flex-end;
        padding: 1.5vw 1.5vw 0 0;
    }

    .title{
        margin-right:30%;
    }

    .xIcon{
        width: 1vw;
        height: 1vw;
    }

    .xIcon:hover{
        color:rgb(255, 0, 76);
        border-radius:2vw;
        background-color: rgb(219, 213, 213);
        transform: translateZ(10px) scale(1.5);
    }

    .user-data{
        width: 88%;
        height: 15vw;
        border:solid 2px rgb(227, 227, 227);
        border-style: dashed ;
        margin-left: 1.85vw;
        padding: 3vw 0vw 0vw 0vw;
        display:flex;
        justify-content: space-evenly;
    }

    .userItem{
        margin: 0em 0.5em 2.7em 0.5em;
        width: 10vw;
        height: auto;
        word-break: break-all;
    }

    .bigField{
        z-index: 2;
        width: 10vw;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .bigField:hover{
        overflow:visible;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 1px 1100px rgba(0, 0, 0, 0.43);
        width: auto;
        height: auto;
    }

    li{
        list-style: none;
        width: auto;
        position:absolute;
        z-index: 1;
    }

    ul{
        width: auto;
        height: auto;
        }
            
    span{
        font-weight: 700;
    }
    

</style>