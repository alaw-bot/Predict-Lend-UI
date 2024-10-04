<template>
  <div>
    <Navbar />
    <h2>Stats Page</h2>
    <div class="grid-container">
      <div class="chart-section" ref="chart1"></div> <!-- First chart section -->
      <div class="chart-section" ref="chart2"></div> <!-- Second chart section -->
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'StatsPage',
  components: {
    Navbar,
  },
  mounted() {
    // Load the Google Charts library
    this.loadGoogleCharts();
  },
  methods: {
    loadGoogleCharts() {
      if (typeof window.google === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.onload = () => {
          window.google.charts.load('current', {
            packages: ['corechart', 'bar'],
          });
          window.google.charts.setOnLoadCallback(this.drawCharts);
        };
        document.head.appendChild(script);
      } else {
        window.google.charts.load('current', {
          packages: ['corechart', 'bar'],
        });
        window.google.charts.setOnLoadCallback(this.drawCharts);
      }
    },
    drawCharts() {
      // Prepare data for the first chart
      const data1 = window.google.visualization.arrayToDataTable([
        ['Year', 'Accepted', 'Rejected'],
        ['2019', 300, 50],
        ['2020', 400, 75],
        ['2021', 350, 90],
        ['2022', 500, 60],
        ['2023', 450, 80],
      ]);

      const options1 = {
        title: 'Loan Applications: Accepted vs Rejected (Chart 1)',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Total Applications',
          minValue: 0,
        },
        vAxis: {
          title: 'Year',
        },
        colors: ['#4caf50', '#f44336'],
      };

      // Create and draw the first chart
      const chart1 = new window.google.visualization.ColumnChart(this.$refs.chart1);
      chart1.draw(data1, options1);

      // Prepare data for the second chart
      const data2 = window.google.visualization.arrayToDataTable([
        ['Year', 'Accepted', 'Rejected'],
        ['2019', 280, 40],
        ['2020', 350, 70],
        ['2021', 300, 60],
        ['2022', 450, 55],
        ['2023', 400, 70],
      ]);

      const options2 = {
        title: 'Loan Applications: Accepted vs Rejected (Chart 2)',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Total Applications',
          minValue: 0,
        },
        vAxis: {
          title: 'Year',
        },
        colors: ['#4caf50', '#f44336'],
      };

      // Create and draw the second chart
      const chart2 = new window.google.visualization.ColumnChart(this.$refs.chart2);
      chart2.draw(data2, options2);
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  gap: 20px; /* Space between the sections */
}

.chart-section {
  height: 400px; /* Set a fixed height for the charts */
  background-color: #4caf50; /* Set background color to green */
  border: 1px solid #fefdfd; /* Optional: Add a border to sections */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow effect */
  margin-left: 32px;
  margin-right: 32px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
