<template>
    <Head>
        <Title>Cars - Mr.Horrocks</Title>
        <Meta name="description" content='Cars' />
    </Head>

    <h2 class="page-heading">Car Component</h2>

    <p>Populated using JSON data...</p>

    <section aria-label="Testing Examples">

        <!-- GRID -->
        <div class="flexed-cols">
            <CarCard />
        </div>
        <!-- END-GRID -->

    </section>
</template>

<style scss scoped>
.flexed-cols {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
}
</style>