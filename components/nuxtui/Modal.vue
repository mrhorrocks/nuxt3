<script setup>
const isOpen = ref(false)
</script>

<template>
    <div>
        <UButton label="Standard modal" @click="isOpen = true" />

        <UModal v-model="isOpen" width="sm:max-w-lg" height="h-100">
            <div class="m-10 text-center">
                <ButtonLink 
                    to="https://github.com/mrhorrocks/nuxt3" 
                    class="w-full sm:w-[initial]" 
                    linkText="Install from github" />
            </div>
        </UModal>
    </div>
</template>
