<template>
    <Line :options="chartOptions" :data="chartData" />
</template>
  
<script lang="ts">
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
    name: 'LineChart',
    components: { Line },
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
                    label: ' Hours of light',
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
                // maintainAspectRatio: true
                layout: {
                    padding: {
                        bottom: 30
                    }
                }
            }
        }
    }
}
</script>
  