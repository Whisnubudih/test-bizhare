<template>
  <div class="home">
    <Navbar />
    <div class="product-container">
      <h1>MY PROFESSIONAL INVESTOR</h1>
      <div class="product-card" v-for="el in users.data" :key="el.id">
        <div class="img-wraper">
          <img class="img-card" :src="el.avatar" />
        </div>
        <div class="title-container">
          <h3 class="title-container-text1">{{el.first_name}} {{el.last_name}}</h3>
          <p class="title-container-text1">
            {{el.email}}
          </p>
          <button class="title-button">Detail</button>
        </div>
      </div>

      <!-- <div class="product-card">
        <div class="img-wraper">
          <img class="img-card" src="https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=700&q=90" alt="">
        </div>
        <h3>title</h3>
       
      </div> -->
    </div>
      <div class="page-container">
     <button class="page-button1" >Prev</button>
    <div v-for="page in users.total_pages" :key="page.id">
      <button @click.prevent="pageUser(page)" class="page-button2">{{page}}</button>
    </div>
      <button class="page-button1">Next</button>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "../components/Navbar.vue";
export default {
  name: "Detail",
  components: {
    Navbar,
  },
  data: function () {
    return {
      pageDefault: 1,
      isModal: false,
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    fetchUser() {
      this.$store.dispatch("fetchUser", 1);
    },
    pageUser(page) {
      if (!page) {
        page = 1;
      }
      const payload = {
        page,
      };
      this.pageDefault = page;
      this.$store.dispatch("fetchUser", payload);
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    editUserId(id) {
      this.$store.dispatch("editUserId", id).then(() => {
        this.$router.push(`/editform/${id}`);
      });
    },
  },
  created() {
    this.fetchUser();
    this.pageUser();
  },
};
</script>

<style>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 600px;
  height: 200px;
  margin: 15px 16px;
  border: 0, 5px solid;
  box-shadow: 0 12px 12px rgb(0 0 0/ 20%);
  border-radius: 20px;
}

.img-wraper {
  padding: 10px;
  margin: 15px;
}

.img-card {
  width: 200px;
  height: 160px;

  border-radius: 20px;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* position: static;
      width: 46px;
      height: 19px; */
}

.title-container-text1 {
  text-align: left;
}

.title-button {
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
}

.page-container{
  display: flex;
  flex-direction: row;
  align-items: center;
}
   .page-button1{
  
   width: 50px;
 }
 
 .page-button2{
   background-color: white;
   width: 50px;
 }
</style>
