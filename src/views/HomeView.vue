<template>
  <header>
    <navbar />
  </header>
  <main></main>

  <footerbar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "HomeView",
  components: {
    navbar: NavBar,
    footerbar: FooterBar,
  },
};
</script>
