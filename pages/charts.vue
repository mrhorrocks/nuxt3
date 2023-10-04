<template>
    <Head>
        <Title>Charts - Mr.Horrocks</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>

    <h2 class="page-heading">Charts</h2>

    <section aria-label="Chartjs Examples">
        <div class="lg:grid grid-cols-3 gap-12">

            <div class="col-span-2">
                <h3 class="section-title">
                    <a href="https://www.chartjs.org/" class="underline">Chartjs Examples</a>
                </h3>
                <div>
                    <h3 class="chart-title">UK Sunlight Hours</h3>
                    <ChartjsBarChart />
                </div>
            </div>

            <div class="col-span-1 mt-12">
                <h3 class="chart-title">UK Sunlight Hours</h3>
                <ChartjsPieChart />
            </div>

        </div>
    </section>
</template>