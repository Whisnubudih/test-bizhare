<template>
  <div class="navbar">
    <img src="../assets/bizhare-logo.webp" class="img-navbar" alt="" />

    <button v-if="isLogin" @click.prevent="isLogout" class="nav-button">
      <p class="table-button-text" >Log Out</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
   computed: {
      isLogin(){
        return this.$store.state.isLogin
      }
    },
  methods: {
    isLogout: function () {
      localStorage.clear();
       this.$store.commit('SET_IS_LOGIN')
      this.$router.push("/login");
      this.$swal({
                icon: 'success',
                title: 'SUCCES LOG OUT',
                text: `THANKS YOU, I HOPE YOU CAME AGAIN`,
              })
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
  margin-bottom: 30px;
  box-shadow: 0 12px 12px rgb(0 0 0/ 6%);
}

.img-navbar {
  position: static;
  width: auto;
  height: 30px;
}

.nav-button {
  width: 100px;

  border-radius: 5px;
  background-color: #304b82;
}
</style>