<template>
  <div>
    <Navbar />
    <LoanForm />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import LoanForm from '../components/LoanForm.vue';

export default {
  name: 'InfoPage',
  components: {
    Navbar,
    LoanForm
  }
}
</script>

<style scoped>
/* Add any styles for the information page here */
</style>
