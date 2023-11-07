<template>
    <Head>
        <Title>TESTING</Title>
        <Meta name="description" content='Testing' />
    </Head>

    <h2 class="page-heading">Testing</h2>

    <section aria-label="Testing Examples">

        <!-- GRID -->
        <div class="flexed-cols">

            <!-- <SelectOptions label="Select from JSON file" id="select-orgs" /> -->
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