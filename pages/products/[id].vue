<template>
    <div>
        <p>Product details for {{ id }}</p>
    </div>
</template>

<script setup>
    // this must match the file name, in this case 'id'
    const { id } = useRoute().params 
</script>