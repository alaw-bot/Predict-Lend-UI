<template>
  <div>
    <Navbar />
    <h2 class="centered">Admin Information</h2>
    <p>Welcome to the Admin Info Page!</p>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'AdminInfo',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
