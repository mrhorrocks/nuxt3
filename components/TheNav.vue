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
                <NuxtLink to="/">Mr.Horrocks</NuxtLink>
            </h1>

            <!-- Show below 1024px -->
            <button @click="toggleMobileMenu" class="lg:hidden text-white">
                <span v-if="mobileMenuOpen">
                    <!-- Close -->
                    <svg width="32" height="32" version="1.1" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z"/>
                    </svg>

                </span>
                <span v-if="!mobileMenuOpen">
                    <!-- Burger -->
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 -960 960 960">
                        <path fill="currentColor" d="M160-120q-33 0-56.5-23.5T80-200v-120h800v120q0 33-23.5 56.5T800-120H160Zm0-120v40h640v-40H160Zm320-180q-36 0-57 20t-77 20q-56 0-76-20t-56-20q-36 0-57 20t-77 20v-80q36 0 57-20t77-20q56 0 76 20t56 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 56-20t76-20q56 0 79 20t55 20v80q-56 0-75-20t-55-20q-36 0-58 20t-78 20q-56 0-77-20t-57-20ZM80-560v-40q0-115 108.5-177.5T480-840q183 0 291.5 62.5T880-600v40H80Zm400-200q-124 0-207.5 31T166-640h628q-23-58-106.5-89T480-760Zm0 520Zm0-400Z"/>
                    </svg> -->

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>

                </span>
            </button>

            <!-- MAIN MENU -->
            <!-- Hide below 1024px -->
            <div class="navlinks">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/charts">Charts</NuxtLink>
                <NuxtLink to="/ui-libraries">UI Libraries</NuxtLink>
                <NuxtLink to="/headless">Headless UI</NuxtLink>
            </div>
        </div>

        <!-- MOBILE MENU -->
        <!-- Show below 1024px -->
        <div v-if="mobileMenuOpen" class="mobilenavlinks">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/charts">Charts</NuxtLink>
            <NuxtLink to="/ui-libraries">UI Libraries</NuxtLink>
            <NuxtLink to="/headless">Headless UI</NuxtLink>
        </div>
    </nav>
</template>