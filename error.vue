<template>
    <div>
        <Head>
            <Title>{{ error.statusCode }} - {{ error.message }}</Title>
            <Meta name="description" content='Error page' />
        </Head>
        *Error page*
        <h1>{{ error.statusCode }}</h1>
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
