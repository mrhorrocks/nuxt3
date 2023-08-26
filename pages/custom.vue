<template>
  <div>

    <Head>
      <Title>A Nuxt 3 Project - Custom</Title>
      <Meta name="description" content='Custom text' />
    </Head>
    <h2>Custom</h2>
  </div>
</template>


<script setup>
definePageMeta({
  // Check the layouts folder for options
  layout: 'custom'
});
</script>