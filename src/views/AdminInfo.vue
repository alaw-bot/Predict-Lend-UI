<template>
  <div>
    <Navbar />
    <h2 class="centered">Admin Information</h2>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <div class="info-container">
        <p>Total Applications: {{ applicationCount }}</p>
        <p>Rejected Applications: {{ rejectedCount }}</p>
        <p>Applications Needing Inspection: {{ inspectionCount }}</p>
      </div>
      <div class="users-container">
        <h3>Manage Users</h3>
        <div class="buttons-container">
          <button @click="navigateToAddUser" class="add-user-btn">Add New User</button>
          <button @click="navigateToStats" class="stats-btn">Stats</button>
        </div>
        <ul>
          <li v-for="user in users" :key="user.id">
            <span>{{ user.name }} ({{ user.email }})</span>
            <button @click="deleteUser(user.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import axios from 'axios';

export default {
  name: 'AdminInfo',
  components: {
    Navbar
  },
  data() {
    return {
      applicationCount: 0,
      rejectedCount: 0,
      inspectionCount: 0,
      users: [],
      loading: true
    };
  },
  methods: {
    fetchApplicationData() {
      axios.get('/api/applications/stats')
        .then(response => {
          this.applicationCount = response.data.total;
          this.rejectedCount = response.data.rejected;
          this.inspectionCount = response.data.needsInspection;
        })
        .catch(error => {
          console.error('Error fetching application data:', error);
        });
    },
    fetchUsers() {
      axios.get('/api/users')
        .then(response => {
          this.users = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          this.loading = false;
        });
    },
    deleteUser(userId) {
      axios.delete(`/api/users/${userId}`)
        .then(() => {
          this.users = this.users.filter(user => user.id !== userId);
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    },
    navigateToAddUser() {
      this.$router.push('/UserInfoInAdmin');
    },
    navigateToStats() {
      this.$router.push('/stats');
    }
  },
  mounted() {
    this.fetchApplicationData();
    this.fetchUsers();
  }
}
</script>


<style scoped>
.centered {
  text-align: center;
  margin-top: 20px;
}

.info-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
}

.users-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.users-container h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.users-container ul {
  list-style-type: none;
  padding: 0;
}

.users-container li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
}

.users-container button {
  padding: 0.5rem 1rem;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.users-container button:hover {
  background-color: #ff1a1a;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.add-user-btn, .stats-btn {
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-user-btn {
  background-color: #4CAF50;
}

.add-user-btn:hover {
  background-color: #45a049;
}

.stats-btn {
  background-color: #007BFF;
}

.stats-btn:hover {
  background-color: #0056b3;
}
</style>
