<template>
    <div>
        <p>Product details for {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params // this must match the file name, in this case 'id'
</script>