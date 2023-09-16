<template>
  <Bar id="my-bar-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
            'Jan', 
            'Feb', 
            'Mar', 
            'Apr', 
            'May', 
            'Jun', 
            'Jul', 
            'Aug', 
            'Sep', 
            'Oct', 
            'Nov', 
            'Dec'
        ],

        datasets: [{
            label: 'Sunlight hours',
            data: [
              8,  // Jan
              9,  // Feb
              11, // Mar
              14, // Apri
              15, // May
              16, // June
              15, // July
              14, // Aug
              12, // Sep
              10, // Oct
              6,  // Nov
              7,  // Dec
            ],
            backgroundColor: [
              '#92400e', // Jan
              '#b45309', // Fen
              '#f59e0b', // Mar
              '#fcd34d', // Apr
              '#fde68a', // May
              '#fef3c7', // June - Lightest
              '#fde68a', // Jul
              '#fcd34d', // Aug
              '#fbbf24', // Sep
              '#d97706', // Oct
              '#451a03', // Nov
              '#78350f', // Dec
            ],
          }]
        },
      chartOptions: {
        responsive: true,
        label: 'My First Dataset',
        title: 'My First Dataset',
        // maintainAspectRatio: true
      }
    }
  }
}
</script>
  