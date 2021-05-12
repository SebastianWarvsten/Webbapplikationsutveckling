<template>
  <div class="home">
    <img alt="Goat logo" src="../assets/logo.png" width="200" height="200" />
    <homepage msg="Welcome to the 4:th lab" />
  </div>
</template>

<script>

import Homepage from "@/components/Homepage.vue";

export default {
  name: "Home",
  components: {
    Homepage,
  },
};
</script>
