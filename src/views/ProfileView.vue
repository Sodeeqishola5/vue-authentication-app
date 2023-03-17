<template>
  <div>
    <h1>Profile View</h1>
    <p>Name: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useCurrentUser } from '../composables/useCurrentUser'

export default defineComponent({
  name: 'ProfileView',
  setup() {
    const { user } = useCurrentUser()

    return {
      user
    }
  }
})
</script>

<style scoped>
</style>
