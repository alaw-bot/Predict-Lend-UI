<template>
  <div>
    <Navbar />
    <h2 class="centered">User Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="button-group">
        <button type="submit">Login</button>
        <button type="button" @click="goToRegister">New User? Sign up!</button>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'UserLogin',
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

      // Assuming the login is successful, navigate to the user info page
      this.$router.push({ name: 'UserInfo' }); // Make sure 'UserInfo' is defined in your router
    },
    goToRegister() {
      this.$router.push({ name: 'UserRegister' }); // Make sure 'UserRegister' is defined in your router
    }
  }
}
</script>

<style scoped>
/* Add any styles for the user login page here */
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

.button-group {
  display: flex;
  justify-content: space-between;
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

.button-group button:first-child {
  margin-right: 10px;
}
</style>
