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
    <nav class="container mx-auto px-2">
        <!-- Primary Menu and Site Title -->
        <div class="flex justify-between items-center">
            <!-- Site Title -->
            <h1 class="text-white">
                <NuxtLink to="/">Mr. Horrocks</NuxtLink>
            </h1>

            <!-- Show below 1024px -->
            <button @click="toggleMobileMenu" class="lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            </button>

            <!-- MAIN MENU -->
            <!-- Hide below 1024px -->
            <div class="lg:flex space-x-3 hidden navlinks">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/graphs">Graphs</NuxtLink>
                <NuxtLink to="/ui">UI Libraries</NuxtLink>
                <NuxtLink to="/todos">Todos</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
            </div>
        </div>

        <!-- MOBILE MENU -->
        <!-- Show below 1024px -->
        <div v-if="mobileMenuOpen" class="lg:hidden bg-blue-500 mobilenavlinks divide-y divide-slate-200">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/graphs">Graphs</NuxtLink>
            <NuxtLink to="/ui">UI Libraries</NuxtLink>
            <NuxtLink to="/todos">Todos</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </div>
    </nav>
</template>
  
<style scoped></style>