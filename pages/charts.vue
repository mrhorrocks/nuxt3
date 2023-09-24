<template>
    <Head>
        <Title>Charts - A Nuxt 3 Project</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>
    
    <h2 class="page-heading">Charts</h2>
    
    <section aria-label="Chartjs Examples">
        <h3><a href="https://www.chartjs.org/">Chartjs Examples</a></h3>
        <div class="lg:grid grid-cols-3">
            <div class="col-span-2 lg:pr-32">
                <h3 class="chart-title">UK sunlight hours per month</h3>
                <ChartjsBarChart />
            </div>

            <div class="pr-4">
                <h3 class="chart-title">UK sunlight hours per month</h3>
                <ChartjsPieChart />
            </div>
        </div>
    </section>

    <section aria-label="Google Charts Examples">
        <h3><a href="https://developers.google.com/chart">Google Charts Examples</a></h3>
        <div class="lg:grid grid-cols-3">
            <div class="col-span-2 lg:pr-32">
                <h3 class="chart-title">UK sunlight hours per month</h3>
                <GoogleBarChart />
            </div>

            <div class="pr-4">
                <h3 class="chart-title">UK sunlight hours per month</h3>
                <GooglePieChart />
            </div>
        </div>
    </section>
</template>