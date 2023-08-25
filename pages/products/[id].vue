<template>
    <div>
        Product details for {{ id }}
    </div>
</template>

<script setup>
    // this must match the file name, in this case 'id'
    const { id } = useRoute().params
</script>

<style scoped>

</style>