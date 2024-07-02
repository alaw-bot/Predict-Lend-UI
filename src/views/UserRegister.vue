<template>
  <div>
    <Navbar />
    <h2 class="centered">New User Registration</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <div class="button-group">
        <button type="submit">Register</button>
        <button type="button" @click="goToLogin">Already have an account? Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'UserRegister',
  components: {
    Navbar
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Here you can add your registration logic, such as sending the username and password to a server for account creation
      console.log(`Username: ${this.username}, Password: ${this.password}`);

      // Assuming the registration is successful, navigate to the user login page
      this.$router.push({ name: 'UserLogin' }); // Make sure 'UserLogin' is defined in your router
    },
    goToLogin() {
      this.$router.push({ name: 'UserLogin' });
    }
  }
}
</script>

<style scoped>
/* Add any styles for the user registration page here */
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
