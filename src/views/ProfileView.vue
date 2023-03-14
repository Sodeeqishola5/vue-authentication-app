<template>
  <div class="profile">
    <h1>Profile</h1>
    <p>Username: {{ currentUser.username }}</p>
    <p>Email: {{ currentUser.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'ProfileView',
  setup() {
    const store = useStore()
    const router = useRouter()

    const currentUser = computed(() => store.getters.currentUser)

    const logout = () => {
      store.dispatch('logout')
      router.push('/login')
    }

    return {
      currentUser,
      logout
    }
  }
}
</script>

<style scoped>
.profile {
  margin: 50px auto;
  max-width: 600px;
  text-align: center;
}
</style>
