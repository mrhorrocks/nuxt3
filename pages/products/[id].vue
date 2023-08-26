<template>
    <div>
        <Head>
            <Title>Product Page - {{ id }}</Title>
            <Meta name="description" content='Error page' />
        </Head>
        <p>Product details for {{ id }}</p>
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