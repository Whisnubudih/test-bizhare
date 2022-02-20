<template>
  <div class="formUser">
      <div class="form">
          
          <h2> Add</h2>
      <form @submit.prevent="addUser" class="form-add">
          <div class="input-add">

                <label class="label-name" for="">Name</label>
                <input v-model="name" class="input-name" type="text" placeholder="Type Here">

                <label class="label-name" for="">Job</label>
                <input v-model="job" class="input-name" type="text" placeholder="Type Here">
              </div>
        <div class="form-button">

          <button class="table-button1" type="submit"> <p class="table-button-text">
               Save
               </p> </button>
               <router-link  to="/">
          <button class="table-button2" type="cancel"> <p class="table-button-text">
               Cancel
               </p> </button></router-link>
        </div>
      </form>
      </div>
  </div>
</template>

<script>
export default {
    name:"formUser",
    data: function(){
        return{
            name:"",
            job:""
        }
    },
    methods:{
        addUser(){
            this.$store.dispatch('addUser',{name:this.name, job:this.job})
            .then(()=>{
                this.$router.push("/")
                 this.$swal({
                icon: 'success',
                title: 'SUCCES',
                text: `SUCCES ADD NEW INSTRUCTUR`,
              })
            })
             .catch(() =>{
              this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: "ERROR",
              })
            })
        }
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
</style>