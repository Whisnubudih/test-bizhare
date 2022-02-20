<template>
  <div class="formUser">
      <div class="form">
          
          <h2> Edit</h2>
      <form @submit.prevent="editUser" class="form-add">
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
  name: "editForm",
  data: function () {
    return {
      name: "",
      job: "",
    };
  },
  computed: {
    userId() {
      return this.$store.state.userId;
    },
  },
  methods: {
    editUser() {
      this.$store
        .dispatch("editUser", { name: this.name, job: this.job },this.userId.id)
        .then(()=>{
                this.$router.push("/")
                 this.$swal({
                icon: 'success',
               title: 'SUCCES',
                text: `SUCCES EDIT PROFILE INSTRUCTUR`,
              })
            })
             .catch(() =>{
               
              this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: "ERROR",
              })
            })
    },
    editUserId() {
      this.$store.dispatch("editUserId", this.$route.params.id);
    },
  },
  created() {
    this.editUserId();
    this.name = this.userId.first_name;
    this.job = this.userId.email;
  },
};
</script>

<style>
</style>