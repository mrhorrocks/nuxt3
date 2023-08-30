<script setup lang="ts">
// See ~/composables folder for available compaosables 
const printString = usePrintString(); // Call the usePrintString plugin
const printToConsole = usePrintToConsole();  // Call the usePrintToConsole plugin
</script>

<template>
    <Head>
        <Title>A Nuxt 3 Project - Composables</Title>
        <Meta name="description" content='Composables' />
    </Head>
    <h2>Composables</h2>
    <p>{{ printString }}</p>
</template>