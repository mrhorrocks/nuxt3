<script setup>
const convertTimeStamp = useConvertTimeStamp();
const printString = usePrintString(); // usePrintString plugin, ~/composables/usePrintString.ts

</script>

<template>
    <Head>
        <Title>A Nuxt 3 Project - TEST</Title>
        <Meta name="description" content='Cars' />
    </Head>

    <h2 class="page-heading">Test</h2>

    <section aria-label="Testing Examples">
        <!-- GRID -->
        <div class="flexed-cols">
            <Counter />
        </div>

        <p>{{ printString }}</p>
        <p>{{ convertTimeStamp }}</p>
        <!-- END-GRID -->

    </section>
</template>

<style scss scoped>
.flexed-cols {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    justify-content:left;
}
</style>