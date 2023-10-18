<template>
  <div>
    <!-- Menu Icon -->
    <button @click="toggleMenu" class="md:hidden absolute top-0 right-0 m-4 p-2 text-gray-600 focus:outline-none">
      <svg v-if="menuOpen" class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
      <svg v-else class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" @click="closeMenu" class="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div v-if="menuOpen"
      class="md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300">
      <ul class="py-8 px-4">
        <li class="mb-4">
          <a href="/">Home</a>
        </li>
        <li class="mb-4">
          <a href="/components">Components</a>
        </li>
        <li class="mb-4">
          <a href="/charts">Charts</a>
        </li>
        <!-- Add more menu items here -->
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>
  
<style scoped>
/* You can style the menu here using Tailwind CSS classes */
</style>
  