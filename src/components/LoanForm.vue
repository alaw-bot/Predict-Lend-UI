<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="form.name" id="name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="form.email" id="email" required />
    </div>
    <div>
      <label for="amount">Loan Amount:</label>
      <input type="number" v-model="form.amount" id="amount" required />
    </div>
    <div>
      <label for="duration">Loan Duration (years):</label>
      <input type="number" v-model="form.duration" id="duration" required />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'LoanFormPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        amount: '',
        duration: ''
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Loan details submitted:\nName: ${this.form.name}\nEmail: ${this.form.email}\nAmount: ${this.form.amount}\nDuration: ${this.form.duration}`);
      // Here you can add code to handle the form submission, like sending the data to a server
    }
  }
}
</script>

<style scoped>
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
