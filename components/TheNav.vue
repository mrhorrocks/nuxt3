<script>
export default {
    data() {
        return {
            // Mobile menu is hidden by default
            mobileMenuOpen: false,
        };
    },
    methods: {
        // Toggle the mobile menu
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
    },
};
</script>
  
<template>
    <nav class="bg-blue-500 p-4">

        <!-- Primary Menu and Site Title -->
        <div class="container mx-auto flex justify-between items-center">
            <!-- Site Title -->
            <h1><NuxtLink to="/">Site title</NuxtLink></h1>
            <!-- show below 1024px -->
            <button @click="toggleMobileMenu" class="lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </button>
            <!-- hide menu below 1024px -->
            <div class="lg:flex space-x-4 hidden">
                <NuxtLink to="/" class="text-white hover:text-gray-300">Home1</NuxtLink>
                <NuxtLink to="/products" class="text-white hover:text-gray-300">Products</NuxtLink>
                <NuxtLink to="/custom" class="text-white hover:text-gray-300">Custom</NuxtLink>
                <NuxtLink to="/tests" class="text-white hover:text-gray-300">API</NuxtLink>
                <NuxtLink to="/composables" class="text-white hover:text-gray-300">Composables</NuxtLink>
                <NuxtLink to="/about" class="text-white hover:text-gray-300">About</NuxtLink>
            </div>
        </div>

        <!-- show below 1024px -->
        <div v-if="mobileMenuOpen" class="lg:hidden bg-blue-500">
            <NuxtLink to="/" class="block py-2 px-4 text-white">Home2</NuxtLink>
            <NuxtLink to="/products" class="block py-2 px-4 text-white">Products</NuxtLink>
            <NuxtLink to="/custom" class="block py-2 px-4 text-white">Custom</NuxtLink>
            <NuxtLink to="/tests" class="block py-2 px-4 text-white">API</NuxtLink>
            <NuxtLink to="/composables" class="block py-2 px-4 text-white">Composables</NuxtLink>
            <NuxtLink to="/about" class="block py-2 px-4 text-white">About</NuxtLink>
        </div>
    </nav>
</template>
  
<style scoped></style>