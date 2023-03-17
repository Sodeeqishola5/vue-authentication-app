<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProductDetails',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    const product = computed(() => {
      const products = store.state.products
      return products.find(p => p.id === props.id)
    })

    return {
      product
    }
  }
})
</script>

<style scoped>
</style>
