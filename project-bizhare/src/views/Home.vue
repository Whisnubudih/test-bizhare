<template>
  <div class="home">
    <h1>MY PROFESSIONAL INSTRUCTOR</h1>
    <div class="page-container">
      <button class="page-button1">Page</button>
      <div v-for="page in users.total_pages" :key="page.id">
        <button @click.prevent="pageUser(page)" class="page-button2">
          {{ page }}
        </button>
      </div>
    </div>
    <div>
      <router-link to="/formuser">
        <button class="table-button3">
          <p class="table-button-text">Add New Data</p>
        </button></router-link
      >
    </div>
    <div class="product-container">
      <div class="product-card" v-for="el in users.data" :key="el.id">
        <div class="img-wraper">
          <img class="img-card" :src="el.avatar" />
        </div>
        <div class="title-container">
          <h3 class="title-container-text1">
            {{ el.first_name }} {{ el.last_name }}
          </h3>
          <p class="title-container-text1">
            {{ el.email }}
          </p>
          <button @click.prevent="editUserId(el.id)" class="title-button">
            <p class="table-button-text">Edit</p>
          </button>

          <button @click.prevent="deleteUser(el.id)" class="title-button2">
            <p class="table-button-text">Delete</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
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
      this.$store
        .dispatch("deleteUser", id)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "SUCCES",
            text: `SUCCES DELETE`,
          });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "ERROR",
          });
        });
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
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.product-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
}

.title-container-text1 {
  text-align: left;
}

.title-button {
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  background-color: #304b82;
}

.title-button2 {
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  background-color: #823030;
}

.page-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.page-button1 {
  width: 50px;
}

.page-button2 {
  background-color: white;
  width: 50px;
}
</style>
