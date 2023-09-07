<script setup>
    definePageMeta({
    // Choose a layout for this page
    layout: 'homepage'
});

    // Override the head content like this too
    useHead({
        title: 'Mr. Horrocks',
        meta: {name: 'description', content: 'A Nuxt 3 Project - Homepage'}
    })
</script>

<template>
    <h2>This is the Homepage layout</h2>
</template>