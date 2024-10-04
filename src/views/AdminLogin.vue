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
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue';


export default {
  name: 'AdminLogin',
  components: {
    Navbar
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '' // To hold error messages
    };
  },
  methods: {
login() {
  // Check the entered credentials
  if (this.username === 'admin@user' && this.password === 'admin@123') {
    // Save successful login attempt
    this.saveLoginAttempt(this.username, true);
    
    // Navigate to the admin info page
    this.$router.push({ name: 'AdminInfo' });
  } else {
    // Save failed login attempt
    this.saveLoginAttempt(this.username, false);
    
    // Show an error message if the credentials do not match
    this.errorMessage = 'Invalid username or password.';
  }
},
saveLoginAttempt(username, success) {
  // Send the login attempt to the backend
  axios.post('http://localhost:8000/api/admin-login', {
    username: username,
    success: success
  })
  .then(response => {
    console.log('Login attempt saved:', response.data);
  })
  .catch(error => {
    console.error('Error saving login attempt:', error);
  });
}

  }
}
</script>


<style scoped>
.centered {
  text-align: center;
  margin-bottom: 2rem; /* Adds space below the title */
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 2rem; /* Adds padding around the form */
  border: 1px solid #ddd; /* Adds a border to the form */
  border-radius: 8px; /* Rounds the corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  background-color: #f9f9f9; /* Light background for contrast */
}

div {
  margin-bottom: 1.5rem; /* Increases space between form elements */
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold; /* Makes labels bold for better visibility */
  color: #333; /* Darker color for labels */
}

input {
  padding: 0.8rem; /* Increased padding for input fields */
  font-size: 1rem;
  border: 1px solid #ccc; /* Border around input fields */
  border-radius: 4px; /* Rounded corners for input fields */
  transition: border-color 0.3s; /* Smooth transition for border color */
}

input:focus {
  border-color: #007bff; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

button {
  padding: 0.8rem; /* Increased padding for button */
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px; /* Rounded corners for button */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */
}

button:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: translateY(-2px); /* Slight lift on hover */
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold; /* Bold error messages */
}

/* Optional: Add a responsive design */
@media (max-width: 600px) {
  form {
    width: 90%; /* Make form full-width on small screens */
  }
}
</style>

