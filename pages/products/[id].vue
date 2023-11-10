<script setup>
const { id } = useRoute().params // Gets the product id fron the URI
const uri = 'https://fakestoreapi.com/products/' + id // Fetch all products and adds the id to the URI
const {data: product } = await useFetch(uri, { key: id}) // Fetch the product

</script>

<template>
    <Head>
        <Title>A Nuxt 3 Project - Product - {{ id }}</Title>
        <Meta name="description" content='Error page' />
    </Head>

    <h2 class="page-heading">{{ product.title }}</h2>
    <NuxtLink to="/products">Products</NuxtLink>
    <p>Product id: {{ product.id }}<br>
    Product Title: {{ product.title }}<br>
    Product Price: £{{ product.price }}</p>

</template>