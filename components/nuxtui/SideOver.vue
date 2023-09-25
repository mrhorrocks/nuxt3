<script setup>
const isOpen = ref(false)
</script>
<template>
    <div>
        <UButton label="Open Sidebar" @click="isOpen = true" />
        <USlideover v-model="isOpen">
            <!-- Content -->
        </USlideover>
    </div>
</template>