<script setup>
const items = [{
    label: 'Getting Started',
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Installation',
    icon: 'i-heroicons-arrow-down-tray',
    disabled: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]
</script>

<template>
    <!-- <UAccordion :items="items" /> -->
    <UAccordion color="sky" variant="solid" size="xl" :items="items" />
</template>
