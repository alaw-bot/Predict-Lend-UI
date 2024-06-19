<template>
  <div>
    <Navbar />
    <h2 class="centered">Admin Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'AdminLogin',
  components: {
    Navbar
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Here you can add your login logic, such as sending the username and password to a server for verification
      console.log(`Username: ${this.username}, Password: ${this.password}`);

      // Assuming the login is successful, navigate to the admin info page
      this.$router.push({ name: 'AdminInfo' });
    }
  }
}
</script>

<style scoped>
/* Add any styles for the admin login page here */
.centered {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

div {
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
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
