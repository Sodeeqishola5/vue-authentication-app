<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          >{{ product.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useCurrentUser } from "@/composables/useCurrentUser";

export default {
  setup() {
    const products = ref([]);
    const { currentUser } = useCurrentUser();

    onMounted(async () => {
      const response = await axios.get("https://dummyjson.com/products");
      products.value = response.data;
    });

    return {
      products,
      currentUser,
    };
  },
};
</script>
