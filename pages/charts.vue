<template>
    <Head>
        <Title>Charts - Mr.Horrocks</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>

    <h2 class="page-heading">Charts</h2>

    <section aria-label="Chartjs Examples">

        <h3 class="section-title">
            <a href="https://www.chartjs.org/" class="underline">Chartjs Examples</a>
        </h3>

        <!-- GRID -->
        <div class="lg:grid lg:grid-cols-3 lg:gap-12">

            <div class="col-span-2">
                <h3 class="chart-title">Sunlight Hours</h3>
                <ChartjsBarChart id="hrs-bar" class="max-h-[400px]" />
            </div>

            <div class="lg:col-span-1">
                <h3 class="chart-title">Sunlight Hours</h3>
                <ChartjsPieChart id="hrs-pie" class="max-h-[400px]" />
            </div>

            <div class="lg:col-span-3">
                <h3 class="chart-title">Sunlight Hours</h3>
                <ChartjsBarChart id="hrs-bar-2" class="max-h-[200px]" />
            </div>

            <div class="lg:col-span-3">
                <h3 class="chart-title">Sunlight Hours</h3>
                <ChartjsLineChart id="hrs-line" class="max-h-[200px]" />
            </div>

        </div>
        <!-- END-GRID -->

    </section>
</template>