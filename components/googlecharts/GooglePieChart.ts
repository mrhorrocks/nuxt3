import { defineComponent, h } from 'vue';
import { GChart } from 'vue-google-charts';
export const type = 'PieChart';
export const data = [
    ['Month', 'Hours per Day'],
    ['Jan', 8],
    ['Feb', 9],
    ['Mar', 11],
    ['Apr', 14],
    ['May', 15],
    ['Jun', 16],
    ['Jul', 15],
    ['Aug', 14],
    ['Sep', 12],
    ['Oct', 10],
    ['Nov', 6],
    ['Dec', 7],
];

export const options = {
    //  title: 'My Daily Activities',
    // theme: 'maximized', // Brings everyting (x/y axis and legend) into the chart area
    'legend': 'none',
    // 'legend': {position: 'right'/* textStyle: {color: 'blue', fontSize: 16} */ },
    'chartArea': { left: 0, top: 30, right: 0, bottom: 0, width: "100%", height: "80%" },
    // width: '100%',
    height: 350,
    //   'is3D':true,
    backgroundColor: 'transparent',
    colors: [
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
