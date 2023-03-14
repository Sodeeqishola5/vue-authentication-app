import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCurrentUser() {
  const store = useStore()

  const currentUser = computed(() => {
    const userId = store.state.currentUserId
    return store.state.users.find(u => u.id === userId)
  })

  return {
    currentUser
  }
}
