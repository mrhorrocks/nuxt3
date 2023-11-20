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
    <nav>
        <!-- Primary Menu and Site Title -->
        <div class="flex justify-between items-center">
            <!-- Site Title -->
            <h1>
                <NuxtLink to="/" title="Mr.Horrocks">Mr.Horrocks</NuxtLink>
            </h1>

            <!-- Show below 1024px -->
            <button @click="toggleMobileMenu" class="lg:hidden text-white">
                <span v-if="mobileMenuOpen">
                    <!-- Close -->
                    <svg width="32" height="40" version="1.1" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z"/>
                    </svg>

                </span>
                <span v-if="!mobileMenuOpen">

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>

                </span>
            </button>

            <!-- MAIN MENU -->
            <!-- Hide below 1024px -->
            <div class="navlinks">
                <NuxtLink to="/" title="Home">Home</NuxtLink>
                <NuxtLink to="/components" title="Components">Components</NuxtLink>
                <NuxtLink to="/charts" title="Charts">Charts</NuxtLink>
                <NuxtLink to="/cars" title="Cars">Cars</NuxtLink>
                <DevOnly>
                    <NuxtLink to="/test" title="Test">Test</NuxtLink>
                    <NuxtLink to="/products" title="Products">Products</NuxtLink>
                    <NuxtLink to="/api" title="Products">Api</NuxtLink>
                    <NuxtLink to="/gitapi" title="Git Api">Git Api</NuxtLink>
                </DevOnly>

            </div>
        </div>

        <!-- MOBILE MENU -->
        <!-- Show below 1024px -->
        <div v-if="mobileMenuOpen" class="mobilenavlinks">
            <NuxtLink to="/" title="Home">Home</NuxtLink>
            <NuxtLink to="/components" title="Components">Components</NuxtLink>
            <NuxtLink to="/charts" title="Charts">Charts</NuxtLink>
            <NuxtLink to="/cars" title="Cars">Cars</NuxtLink>
            <DevOnly>
                <NuxtLink to="/test" title="Test">Test</NuxtLink>
                <NuxtLink to="/products" title="Products">Products</NuxtLink>
                <NuxtLink to="/api" title="Products">Api</NuxtLink>
                <NuxtLink to="/gitapi" title="Git Api">Git Api</NuxtLink>
            </DevOnly>
        </div>
    </nav>
</template>