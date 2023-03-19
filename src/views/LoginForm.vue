<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="username" id="username" v-model="state.username" required autocomplete="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="state.password" required autocomplete="new-password" />
      </div>
      <button type="submit">Login</button>
      <p v-if="state.error" class="error">{{ state.error }}</p>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "LoginForm",
  setup() {
    const state = reactive({
      username: "",
      password: "",
      error: "",
    });

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      const { username, password } = state;
      try {
        await store.dispatch("login", { username, password });
        router.push("/products");
      } catch (error) {
        state.error = error.message;
      }
    };

    return {
      state,
      handleSubmit,
    };
  },
};
</script>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ccc;
}

h2 {
  font-size: 4rem;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 300px;
}

label {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
}
input[type="username"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #4caf50;
}

button[type="submit"] {
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #388e3c;
}

.error {
  color: red;
  font-size: 1.5rem;
  margin-top: 1rem;
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
    margin-bottom: 0.15rem;
  }
}
</style>
