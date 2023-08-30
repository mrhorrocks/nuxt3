<template>
    <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">Site title</NuxtLink>
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            <li><NuxtLink to="/custom">Custom</NuxtLink></li>
            <li><NuxtLink to="/composables">Composables</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/tests">API</NuxtLink></li>
        </ul>
    </nav>
</template>