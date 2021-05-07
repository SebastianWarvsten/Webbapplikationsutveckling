<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/goatprofilepic.jpeg">
    <homepage msg="Welcome to the 4:th lab"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'

export default {
  name: 'Home',
  components: {
    Homepage
  }
}
</script>
