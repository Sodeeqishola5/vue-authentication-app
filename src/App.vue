<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
  },
  computed: {
    ...mapGetters(['authenticated'])
  },
  mounted() {
    if (this.authenticated) {
      this.$router.push('/products');
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
