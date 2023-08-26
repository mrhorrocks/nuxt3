<template>
    <div>
        *Error page*
        <h1>Error Page</h1>
        <p>{{ error.message }}</p>
        <p>{{ error.statusCode }}</p>

        <button @click="handleError">Clear errors</button>
    </div>
</template>


<script setup>
    defineProps(['error'])
    // Use this to reset errors and redirect to the homepage
    const handleError = () => clearError({ redirect: '/' })
</script>
