<template>
  <div>
    <h1>Products Page</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="'/products/'+product.id">{{product.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProductsPage',
  setup() {
    const store = useStore()

    const products = computed(() => store.state.products)

    return {
      products
    }
  }
})
</script>

<style scoped>
</style>
