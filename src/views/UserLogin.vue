<template>
  <div class="login-container">
    <Navbar />
    <h2 class="centered">User Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="button-group">
        <button type="submit" class="login-button">Login</button>
        <button type="button" @click="goToRegister" class="register-button">New User? Sign up!</button>
      </div>
    </form>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar.vue';

export default {
  name: 'UserLogin',
  components: {
    // Navbar
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log(`Username: ${this.username}, Password: ${this.password}`);
      this.$router.push({ name: 'UserInfo' });
    },
    goToRegister() {
      this.$router.push({ name: 'UserRegister' });
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Full height */
  background: linear-gradient(to right, #4e54c8, #8f94fb); /* Gradient background */
  color: rgb(0, 0, 0);
}

.centered {
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif; /* Choose a font that fits your design */
}

.login-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.input-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row; /* Stack label and input vertically */
  align-items: center; /* Center horizontally */
  width: 300px;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: center; /* Center label text */
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s; /* Smooth border color transition */
  width: 100%; /* Make input full width */
}

input:focus {
  border-color: #007bff; /* Change border color on focus */
  outline: none;
}

.button-group {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  align-items: center; /* Center buttons */
  margin-top: 20px; /* Space above the buttons */
}

button {
  padding: 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s; /* Smooth background color and scale transition */
  width: 100%; /* Make buttons full width */
  margin-bottom: 10px; /* Space between buttons */
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Slightly scale up on hover */
}

.register-button {
  background-color: transparent; /* Make the second button transparent */
  color: #007bff; /* Use primary color for text */
  border: 1px solid #007bff; /* Add border */
}

.register-button:hover {
  background-color: rgba(0, 123, 255, 0.1); /* Light background on hover */
}
</style>
