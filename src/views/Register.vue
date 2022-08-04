<template>
<div>
  <UserSwich  class="swich"/><br>
  <RegisterForm />
  <div class="footerBox">
  </div>
</div>
</template>

<script>
import UserSwich from "@/components/UserSwich.vue"
import RegisterForm from "@/components/Registration/registerForm.vue"
export default {
  components:{
    RegisterForm,
    UserSwich
  }
}
</script>

<style scoped>
  .footerBox{
    margin-top: 37vh;
    border:solid 1px rgb(227, 227, 227);
    width: 100%;
    background-color: black;
    position: absolute;
}

.swich{
  margin-left:38.5%
}
</style>