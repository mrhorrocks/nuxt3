<script setup lang="ts">
    // See ~/composables folder for available compaosables 
    const printString = usePrintString();
    const printToConsole = usePrintToConsole();
</script>

<template>
    <div>

        <Head>
            <Title>A Nuxt 3 Project - Composables</Title>
            <Meta name="description" content='Composables' />
        </Head>
        <h2>Composables</h2>
        
        <p>{{ printString }}</p>

    </div>
</template>