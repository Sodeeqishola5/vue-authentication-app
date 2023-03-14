<template>
  <div>
    <h1>Products Page</h1>
    <div v-if="products">
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
  setup() {
    const store = useStore()
    const products = ref(null)

    onMounted(async () => {
      const user = store.getters.user
      if (user) {
        const token = user.token
        try {
          const response = await axios.get('https://dummyjson.com/products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          products.value = response.data
        } catch (error) {
          console.error(error)
        }
      }
    })

    return {
      products,
    }
  },
}
</script>
