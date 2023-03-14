<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const route = useRoute()
    const product = ref(null)

    onMounted(async () => {
      const productId = route.params.id
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`)
        product.value = response.data
      } catch (error) {
        console.error(error)
      }
    })

    return {
      product,
    }
  },
}
</script>
