<template>
  <div class="home">
    <img alt="Goat logo" src="../assets/logo.png" width="512" height="512" />
    <homepage msg="Welcome to the 4:th lab" />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";

export default {
  name: "Home",
  components: {
    Homepage,
  },
};
</script>
