<template>
  <div class="FillForm-container">
    <div>
      <Navbar />
      <h2 class="centered">Fill Up Form</h2>
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group" v-for="(value, key, index) in formData" :key="index">
          <label :for="key">{{ `Field ${index + 1}:` }}</label>
          <input :id="key" v-model="formData[key]" type="text" required />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <h3>Submitted Data:</h3>
          <div v-for="(value, key, index) in formData" :key="index" class="result-item">
            <p><strong>{{ `Field ${index + 1}:` }}</strong> {{ value }}</p>
          </div>
          <button @click="editForm" class="modal-button">Edit</button>
          <button @click="submitForm" class="modal-button submit-button">Confirm Submit</button>
        </div>
      </div>

      <div v-if="formSubmitted" class="submission-message">
        <p>Form submitted successfully!</p>
        <button @click="closeMessage" class="close-button">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'FillForm',
  components: {
    Navbar
  },
  data() {
    return {
      formData: {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: ''
      },
      showModal: false,
      formSubmitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.showModal = true; // Show modal with data
      console.log('Form Data:', this.formData); // Log data
    },
    closeModal() {
      this.showModal = false; // Close modal
    },
    editForm() {
      this.showModal = false; // Close modal for editing
    },
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:8000/api/submit-form', this.formData);
        console.log(response.data);
        this.formSubmitted = true; // Show success message
        this.resetForm(); // Reset the form data
        this.showModal = false; // Close modal
      } catch (error) {
        console.error('Error submitting the form:', error.response ? error.response.data : error.message);
        alert('An error occurred while submitting the form. Please try again.');
      }
    },
    closeMessage() {
      this.formSubmitted = false; // Close success message
    },
    resetForm() {
      this.formData = { // Reset form data
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: ''
      };
    }
  }
}
</script>

<style scoped>
.FillForm-container {
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
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4285f4;
  outline: none;
}

button {
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}

.modal-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button {
  background: #34a853;
}

.submission-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.submission-message p {
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
}

.submission-message .close-button {
  display: block;
  margin: 1rem auto 0;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
