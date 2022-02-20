<template>
  <div class="formUser">
      <div class="form">
          <div class="container-image">
          <img src="../assets/bizhare-logo.webp" class="img-navbar" alt="">
          <h2> Login</h2>

          </div>
      <form @submit.prevent="login" class="form-add">
          <div class="input-add">

                <label class="label-name" for="">Email</label>
                <input v-model="email" class="input-name" type="text" placeholder="Type Here">

                <label class="label-name" for="">Password</label>
                <input v-model="password" class="input-name" type="password" placeholder="Type Here">
              </div>
        <div class="form-button">

          <button class="table-button1" type="submit"> <p class="table-button-text">
               Save
               </p> </button>
        </div>
      </form>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function(){
        return {
            email:"",
            password: "",
          
        }
    },
  methods: {
      login: function(){
          this.$store.dispatch('login',{email: this.email,password: this.password})
           .then(()=>{
                this.$router.push("/")
                 this.$swal({
                icon: 'success',
                title: 'SUCCES LOGIN',
                text: `WELCOME IN BIZHARE`,
              })
            })
             .catch((err) =>{
              this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message,
              })
            })
      },
  }
}
</script>

<style>
.formUser{
  display: flex;
  flex-direction: column;
  align-items: center;  
}

.form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 36px;

    position: static;
    width: 501px;
   

    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.07);
    border-radius: 16px;;
    margin: 100px 72px;
}

.container-image{
    display: flex;
     flex-direction: column;
     align-items: center;
     width: 450px;
     margin-bottom: 20px;
}

.form-add{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
}

.input-add{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
}

.label-name{
    position: static;
    width: 41px;
    left: 0px;
    top: 0%;
    bottom: 75.95%;
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #383535;
}

.input-name{
     display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 16px;
    position: static;
    width: 429px;
    bottom: 0%;
    background: #FBFBFB;
    border: 1px solid #EEF2F5;
    box-sizing: border-box;
    margin-bottom: 20px;
}

.form-button{
  width: 100%;
    text-align: center;
}

 .table-button1{
    width: 100%;
    height: 30px;
    margin: 10px;
    background-color: #304b82;
    border-radius: 10px;
  }

  .table-button2{
    width: 100%;
    height: 30px;
    margin: 10px;
    background-color: #823030;
    border-radius: 10px;
  }

   .table-button3{
    width: 150px;
    height: 30px;
    margin: 10px;
    background-color: #304b82;
  }

  .table-button-text{
    margin: 0;
    color: aliceblue;
  }
</style>