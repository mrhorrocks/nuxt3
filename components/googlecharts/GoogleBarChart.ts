import { defineComponent, h } from 'vue';
import { GChart } from 'vue-google-charts';
// export const type = 'BarChart'; // Horizontal
export const type = 'ColumnChart'; // Vertical
export const data = [
    ['Month', 'Hours', { role: 'style' }],
    ['Jan', 8, '#92400e'],
    ['Feb', 9, '#b45309'],
    ['Mar', 11, '#f59e0b'],
    ['Apr', 14, '#fcd34d'],
    ['May', 15, '#fde68a'],
    ['Jun', 16, '#fef3c7'],
    ['Jul', 15, '#fde68a'],
    ['Aug', 14, '#fcd34d'],
    ['Sep', 12, '#fbbf24'],
    ['Oct', 10, '#d97706'],
    ['Nov', 6, '#451a03'],
    ['Dec', 7, '#78350f'],
];

export const options = {
    // title: 'Population of Largest U.S. Cities',
    // theme: 'maximized', // Brings everyting (x/y axis and legend) into the chart area
    
    'chartArea': { left: 50, top: 10, width: "100%", height: "80%" },
    hAxis: {
        // title: 'Total Population',
        minValue: 0,
    },
    // vAxis: {
    //     title: 'City',
    // },
    // width: 800,
    height: 357,
    backgroundColor: 'transparent',
    legend: {position: 'in'},
    colors:['#92400e','red'],
    bar: {
        groupWidth: '76%' // Space between columns
    }
};

export default defineComponent({
    name: 'GoogleChart',
    components: {
        GChart,
    },
    setup() {
        return () =>
            h(GChart, {
                data,
                options,
                type,
            });
    },
});
