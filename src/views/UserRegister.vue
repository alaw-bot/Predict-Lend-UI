<template>
  <div class="registration-container">
    <Navbar />
    <h2 class="centered">New User Registration</h2>
    <form @submit.prevent="register" class="registration-form">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>

      <!-- Password input with custom eye icon -->
      <div class="input-group password-group">
        <label for="password">Password:</label>
        <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required />
        <span class="toggle-password" @click="togglePasswordVisibility('password')">
          <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path fill="currentColor" d="M12 4.5C6.35 4.5 1.35 9.13 1.15 9.4 0.98 9.67 0 10.53 0 12c0 1.47 0.98 2.33 1.15 2.6C1.35 14.87 6.35 19.5 12 19.5c5.65 0 10.65-4.63 10.85-4.9 0.17-0.27 0.85-1.13 0.85-2.6s-0.68-2.33-0.85-2.6C22.65 9.13 17.65 4.5 12 4.5zm0 11.25a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5zM12 10c-1.12 0-2 0.88-2 2s0.88 2 2 2 2-0.88 2-2-0.88-2-2-2z"/>
          </svg>
<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24" top="12">
    <path fill="green" d="M12 4.5C6.35 4.5 1.35 9.13 1.15 9.4 0.98 9.67 0 10.53 0 12c0 1.47 0.98 2.33 1.15 2.6C1.35 14.87 6.35 19.5 12 19.5c5.65 0 10.65-4.63 10.85-4.9 0.17-0.27 0.85-1.13 0.85-2.6s-0.68-2.33-0.85-2.6C22.65 9.13 17.65 4.5 12 4.5zM12 17.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
    <path fill="white" d="M12 10c-1.12 0-2 0.88-2 2s0.88 2 2 2 2-0.88 2-2-0.88-2-2-2z"/>
</svg>


        </span>
      </div>

      <!-- Confirm Password input with custom eye icon -->
      <div class="input-group password-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword" required />
        <span class="toggle-password" @click="togglePasswordVisibility('confirmPassword')">
          <svg v-if="showConfirmPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path fill="currentColor" d="M12 4.5C6.35 4.5 1.35 9.13 1.15 9.4 0.98 9.67 0 10.53 0 12c0 1.47 0.98 2.33 1.15 2.6C1.35 14.87 6.35 19.5 12 19.5c5.65 0 10.65-4.63 10.85-4.9 0.17-0.27 0.85-1.13 0.85-2.6s-0.68-2.33-0.85-2.6C22.65 9.13 17.65 4.5 12 4.5zm0 11.25a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5zM12 10c-1.12 0-2 0.88-2 2s0.88 2 2 2 2-0.88 2-2-0.88-2-2-2z"/>
          </svg>
<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
    <path fill="currentColor" d="M12 4.5C6.35 4.5 1.35 9.13 1.15 9.4 0.98 9.67 0 10.53 0 12c0 1.47 0.98 2.33 1.15 2.6C1.35 14.87 6.35 19.5 12 19.5c5.65 0 10.65-4.63 10.85-4.9 0.17-0.27 0.85-1.13 0.85-2.6s-0.68-2.33-0.85-2.6C22.65 9.13 17.65 4.5 12 4.5zM12 17.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
    <path fill="white" d="M12 10c-1.12 0-2 0.88-2 2s0.88 2 2 2 2-0.88 2-2-0.88-2-2-2z"/>
</svg>

        </span>
      </div>

      <div class="button-group">
        <button type="submit" class="register-button" :disabled="loading">
          <span v-if="loading">Registering...</span>
          <span v-else>Register</span>
        </button>
        <button type="button" @click="goToLogin" class="login-button">Already have an account? Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
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
      confirmPassword: '',
      showPassword: false, // Toggle visibility for password
      showConfirmPassword: false, // Toggle visibility for confirm password
      loading: false
    };
  },
  methods: {
    togglePasswordVisibility(field) {
      if (field === 'password') {
        this.showPassword = !this.showPassword;
      } else if (field === 'confirmPassword') {
        this.showConfirmPassword = !this.showConfirmPassword;
      }
    },
    async register() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      this.loading = true;

      try {
        const response = await axios.post('http://localhost:8000/api/register', {
          username: this.username,
          password: this.password
        });

        alert(response.data.message);
        this.$router.push({ name: 'UserLogin' });
      } catch (error) {
        console.error(error);
        alert('Registration failed. Please try again.');
      } finally {
        this.loading = false;
      }
    },
    goToLogin() {
      this.$router.push({ name: 'UserLogin' });
    }
  }
};
</script>

<style scoped>
.registration-container {
  /* styles for container */
}

.registration-form {
  /* styles for form */
}

.input-group {
  /* styles for input group */
}

.password-group {
  position: relative; /* Make the parent relative to position the icon */
}

.toggle-password {
  position: absolute; /* Position the toggle icon */
  top: 50%;
  right: 10px; /* Adjust right space */
  transform: translateY(-50%); /* Center vertically */
  cursor: pointer; /* Pointer cursor for better UX */
}



.registration-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  color: rgb(0, 0, 0);
}

.centered {
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif;
}

.registration-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.input-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Add relative positioning */
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: center;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
  width: 100%;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.password-group {
  position: relative; /* Position the icon within the input container */
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #007bff;
}

.toggle-password:hover {
  color: #0056b3;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

button {
  padding: 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  width: 100%;
  margin-bottom: 10px;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.login-button {
  background-color: transparent;
  color: #007bff;
}

.login-button:hover {
  background-color: rgba(0, 123, 255, 0.1);
}
/* other styles */
</style>
