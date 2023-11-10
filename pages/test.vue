<script>
const timestamp = 1677679162168; // Replace this with your timestamp
const date = new Date(timestamp);

const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const day = date.getDate().toString().padStart(2, '0');
const hours = date.getHours().toString().padStart(2, '0');
const minutes = date.getMinutes().toString().padStart(2, '0');
const seconds = date.getSeconds().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(formattedDate);

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