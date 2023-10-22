<script setup>
definePageMeta({
    layout: 'blank'
});
</script>

<template>
    <p>Test page</p>
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