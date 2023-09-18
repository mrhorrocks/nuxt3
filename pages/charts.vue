<template>
    <Head>
        <Title>Charts - A Nuxt 3 Project</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>
    <h2 class="page-heading">Charts</h2>
    <h3>Chartjs</h3>

    <!-- row 1 -->
    <div class="lg:grid grid-cols-3">
        <div class="col-span-2 lg:pr-32">
            <h3 class="chart-title">UK hours of sunight per month</h3>
            <GoogleBarChart />
        </div>

        <div class="pr-4">
            <h3 class="chart-title">UK hours of sunight per month</h3>
            <GooglePieChart />
        </div>
    </div>
</template>