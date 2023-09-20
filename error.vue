<script setup>
defineProps(['error'])
// Use this to reset errors and redirect to the homepage
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="app-height">
        <TheHeader />
        <main>

            <Head>
                <Title>A Nuxt 3 Project - {{ error.statusCode }} - {{ error.message }}</Title>
                <Meta name="description" content='Error' />
            </Head>
            <div class="grid grid-cols-1">
                <div class="pt-8">
                    <h2>Error {{ error.statusCode }}</h2>

                    <p>{{ error.message }}</p>

                    <!-- Clear the errors and redirect back to see bellow -->
                    <button @click="handleError">Go to the homepage</button>
                </div>
            </div>
        </main>
        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
h2 {
    font-size: 6rem;
    line-height: 10rem;
    color: #ef4444;
    font-weight: bold;
    text-shadow: 1px 1px 0px #000;
    font-style: italic;
}

p {
    font-size: 3rem;
    font-weight: bold;
}

button {
    background-color: #3b82f6;
    border-radius: 0.375rem;
    margin-top: 4rem;
    color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    &:hover {
        background-color: #1d4ed8;
    }
}
</style>