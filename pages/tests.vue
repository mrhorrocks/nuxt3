<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
    <div>
        <!-- Called from the api -->
        <pre>{{ data }}</pre>
    </div>
</template>
