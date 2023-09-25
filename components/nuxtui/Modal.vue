<script setup>
const isOpen = ref(false)
</script>

<template>
    <div>
        <UButton label="Standard modal" @click="isOpen = true" />

        <UModal v-model="isOpen" width="sm:max-w-lg" height="h-100">
            <div class="m-10">
                <UButton>Button</UButton>
            </div>
        </UModal>
    </div>
</template>
