<template>
    <div>
        <Head>
            <Title>A Nuxt 3 Project - {{ error.statusCode }} - {{ error.message }}</Title>
            <Meta name="description" content='Error' />
        </Head>
        <h2>{{ error.statusCode }}</h2>
        <p>{{ error.message }}</p>

        <!-- Clear the errors and redirect back to see bellow -->
        <button @click="handleError">Clear errors</button>
    </div>
</template>


<script setup>
defineProps(['error'])
// Use this to reset errors and redirect to the homepage
    const handleError = () => clearError({ redirect: '/' })
</script>
