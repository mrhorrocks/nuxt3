<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products') // Fetch all products
</script>

<template>
    <Head>
        <Title>A Nuxt 3 Project - Products</Title>
        <Meta name="description" content="Products index" />
    </Head>

    <h2 class="page-heading">Products</h2>

    <section aria-label="Testing Examples">
        <div v-for="item in products" :key="item.id">
            <p>
                <NuxtLink :to="`/products/${item.id}`">{{ item.title }}</NuxtLink>
            </p>
        </div>

    </section>
</template>