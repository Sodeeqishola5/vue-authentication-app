import { computed } from 'vue';
import { useStore } from 'vuex';

export function useCurrentUser() {
  const store = useStore();

  const currentUser = computed(() => store.state.currentUser);

  const isLoggedIn = computed(() => !!currentUser.value);

  return {
    currentUser,
    isLoggedIn,
  };
}
