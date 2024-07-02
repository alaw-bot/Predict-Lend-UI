<template>
  <div>
    <Navbar />
    <h2 class="centered">User Information</h2>
    <p class="centered">Welcome to the User Info Page!</p>
    <div class="button-group">
      <button @click="checkEligibility">Check Eligibility</button>
      <button @click="fillForm">Fill Up Form</button>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'UserInfo',
  components: {
    Navbar
  },
  methods: {
    checkEligibility() {
      this.$router.push({ name: 'CheckEligibility' }); // Make sure 'CheckEligibility' is defined in your router
    },
    fillForm() {
      this.$router.push({ name: 'FillForm' }); // Make sure 'FillForm' is defined in your router
    }
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
