<template>
  <header>
    <div class="logo">
      <img src="../assets/Alt_Logo_Black.png" alt="alt" />
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Log In</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button @click="logout">Log Out</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped>
/* add some styles to make the header look nice */
header {
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 30%;
  border-radius: 50%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

li {
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
}

button {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 775px) {
  .logo img {
    width: 40%;
    border-radius: 50%;
  }
}
@media screen and (max-width: 365px) {
  .logo img {
    width: 100%;
    border-radius: 50%;
  }
  li {
  margin: 0 5px;
}
}
</style>
