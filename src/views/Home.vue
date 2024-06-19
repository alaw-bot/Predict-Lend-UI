<template>
  <div>
    <Navbar />
    <div class="home-buttons">
      <button @click="goToAdminLogin">Admin Login</button>
      <button @click="goToUserLoginPage">User Login</button> <!-- Corrected here -->
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar
  },
  methods: {
    goToAdminLogin() {
      this.$router.push({ name: 'AdminLogin' });
    },
    goToUserLoginPage() {
      this.$router.push({ name: 'UserLogin' });
    }
  }
}
</script>

<style scoped>
.home-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
