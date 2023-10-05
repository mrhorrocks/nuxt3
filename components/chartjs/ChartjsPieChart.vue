<template>
    <Pie :options="chartOptions" :data="chartData" />
</template>
  
<script lang="ts">
import { Pie } from 'vue-chartjs'
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'PieChart',
    components: { Pie },
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
                    label: ' Hours',
                    data: [
                        // 31, // Jan
                        // 28, // Feb
                        // 31, // Mar
                        // 30, // April
                        // 31, // May
                        // 30, // June
                        // 31, // July
                        // 31, // Aug
                        // 30, // Sep
                        // 31, // Oct
                        // 30, // Nov
                        // 31, // Dec
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
                // maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        bottom: 30,
                    },
                },
                tooltips: {
                    enabled: true,
                },
            }
        }
    }
};
</script>