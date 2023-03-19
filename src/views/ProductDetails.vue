<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  setup() {
    const product = ref(null);
    const route = useRoute();
    const { id } = route.params;
    onMounted(async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      product.value = response.data;
    });

    return {
      product,
    };
  },
};
</script>
