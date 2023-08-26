<template>
    <div>

        <Head>
            <Title>A Nuxt 3 Project - Product - {{ id }}</Title>
            <Meta name="description" content='Error page' />
        </Head>
        <h2>Product details for {{ id }}</h2>
    </div>
</template>

<script setup>
// This must match the file name, in this case 'id'
const { id } = useRoute().params

//Override the head content like this too
// useHead({
//     title:  'Product details for id',
//     meta: { name: 'description', content: 'description' }
// }) 
</script>