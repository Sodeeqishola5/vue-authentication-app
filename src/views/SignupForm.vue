<template>
  <div class="signup-form">
    <h2>Sign up</h2>
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="username" id="username" v-model="username" required autocomplete="username" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required autocomplete="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required autocomplete="new-password" />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          required
          autocomplete="confirmPassword"
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    const handleSignup = () => {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
      }

      store
        .dispatch("signup", { username: username.value, email: email.value, password: password.value })
        .then(() => router.push("/products"))
        .catch((error) => alert(error.message));
    };

    return {
      username,
      email,
      password,
      confirmPassword,
      handleSignup,
    };
  },
};
</script>

<style>
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ccc;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button[type="submit"] {
  margin-bottom: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #388e3c;
}
@media screen and (max-width: 740px) {
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  form {
    width: 50%;
    min-width: 200px;
  }
  label {
    font-size: 1rem;
    margin-bottom: .15rem;
  }
}
</style>
