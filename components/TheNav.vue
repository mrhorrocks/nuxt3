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
            <h1 class="text-white">
                <NuxtLink to="/">A Nuxt 3 project</NuxtLink>
            </h1>

            <!-- Show below 1024px -->
            <button @click="toggleMobileMenu" class="lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            </button>

            <!-- MAIN MENU -->
            <!-- Hide below 1024px -->
            <div class="lg:flex space-x-4 hidden navlinks">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/products">Products</NuxtLink>
                <NuxtLink to="/custom">Custom</NuxtLink>
                <NuxtLink to="/tests">API</NuxtLink>
                <NuxtLink to="/composables">Composables</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/uses">Uses</NuxtLink>
            </div>
        </div>

        <!-- MOBILE MENU -->
        <!-- Show below 1024px -->
        <div v-if="mobileMenuOpen" class="lg:hidden container mx-auto bg-blue-500 mobilenavlinks">
            <NuxtLink to="/" class="block">Home</NuxtLink>
            <NuxtLink to="/products" class="block">Products</NuxtLink>
            <NuxtLink to="/custom" class="block">Custom</NuxtLink>
            <NuxtLink to="/tests" class="bloce">API</NuxtLink>
            <NuxtLink to="/composables" class="block ">Composables</NuxtLink>
            <NuxtLink to="/about" class="block">About</NuxtLink>
            <NuxtLink to="/uses">Uses</NuxtLink>
        </div>
    </nav>
</template>
  
<style scoped></style>