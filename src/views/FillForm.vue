<template>
  <div>
    <Navbar />
    <h2 class="centered">Fill Up Form</h2>
    <form @submit.prevent="handleSubmit" class="form">
      <div>
        <label for="field1">Field 1:</label>
        <input type="text" id="field1" v-model="formData.field1" />
      </div>
      <div>
        <label for="field2">Field 2:</label>
        <input type="text" id="field2" v-model="formData.field2" />
      </div>
      <div>
        <label for="field3">Field 3:</label>
        <input type="text" id="field3" v-model="formData.field3" />
      </div>
      <div>
        <label for="field4">Field 4:</label>
        <input type="text" id="field4" v-model="formData.field4" />
      </div>
      <div>
        <label for="field5">Field 5:</label>
        <input type="text" id="field5" v-model="formData.field5" />
      </div>
      <div>
        <label for="field6">Field 6:</label>
        <input type="text" id="field6" v-model="formData.field6" />
      </div>
      <div>
        <label for="field7">Field 7:</label>
        <input type="text" id="field7" v-model="formData.field7" />
      </div>
      <div>
        <label for="field8">Field 8:</label>
        <input type="text" id="field8" v-model="formData.field8" />
      </div>
      <button type="submit">Submit</button>
    </form>

    <div v-if="submitted" class="results">
      <h3>Submitted Data:</h3>
      <p><strong>Field 1:</strong> {{ formData.field1 }}</p>
      <p><strong>Field 2:</strong> {{ formData.field2 }}</p>
      <p><strong>Field 3:</strong> {{ formData.field3 }}</p>
      <p><strong>Field 4:</strong> {{ formData.field4 }}</p>
      <p><strong>Field 5:</strong> {{ formData.field5 }}</p>
      <p><strong>Field 6:</strong> {{ formData.field6 }}</p>
      <p><strong>Field 7:</strong> {{ formData.field7 }}</p>
      <p><strong>Field 8:</strong> {{ formData.field8 }}</p>
    </div>
  </div>
</template>

<script>
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
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      console.log('Form Data:', this.formData);
    }
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

.form > div {
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

.results {
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid #ddd;
  padding: 1rem;
}

.results h3 {
  text-align: center;
}

.results p {
  margin: 0.5rem 0;
}
</style>
