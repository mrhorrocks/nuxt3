<script setup>
definePageMeta({
    layout: 'blank'
});
</script>

<template>
    <div>
        123456
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