<script setup>
const isOpen = ref(false)
</script>

<template>
    <div>
        <UButton label="Fullscreen modal" @click="isOpen = true" />

        <UModal v-model="isOpen" fullscreen>
            <UCard :ui="{
                base: 'h-full flex flex-col',
                rounded: '',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                body: {
                    base: 'grow'
                }
            }">
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Fullscreen Modal
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="isOpen = false" />
                    </div>

                <Placeholder class="h-full" />
            </UCard>
        </UModal>
    </div>
</template>
