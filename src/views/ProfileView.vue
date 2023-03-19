<template>
  <div>
    <h1>Profile View</h1>
    <p>Username: {{ currentUser.username }}</p>
    <p>Email: {{ currentUser.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useCurrentUser } from '@/composables/useCurrentUser'

export default {
  name: 'ProfileView',
  setup() {
    const store = useStore()
    const router = useRouter()
    const currentUser = useCurrentUser()

    const logout = async () => {
      await store.dispatch('auth/logout')
      router.push({ name: 'Login' })
    }

    return { currentUser, logout }
  }
}
</script>
