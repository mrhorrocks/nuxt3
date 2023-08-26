<template>
  <div>

    <Head>
      <Title>A Nuxt 3 Project - Using a Custom Layout</Title>
      <Meta name="description" content='Custom layout' />
    </Head>
    <h2>Custom</h2>
  </div>
</template>


<script setup>
  definePageMeta({
  //See the layouts folder for more options
    layout: 'custom'
});
</script>