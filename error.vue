<script setup>
defineProps(['error'])
const handleError = () => clearError(window.history.back())
// const handleError = () => clearError({ redirect: '/' }) 
</script>

<template>
    <div class="app-height">
        <TheHeader />
        <main>

            <Head>
                <Title>A Nuxt 3 Project - {{ error.statusCode }} - {{ error.message }}</Title>
                <Meta name="description" content='Error Page' />
            </Head>
            <div class="grid grid-cols-1">
                <div class="pt-8 text-center">
                    <h2>{{ error.statusCode }}</h2>
                    <p>{{ error.message }}</p>

                    <!-- Clear the errors and redirect back to see bellow -->
                    <Button class="button" @click="handleError();">

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="w-6 h-6">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 12H8" />
                            <path d="m12 8-4 4 4 4" />
                        </svg>

                        Go Back</Button>
                </div>
            </div>
        </main>
        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
h2 {
    font-size: 8rem;
    line-height: 1;
    font-weight: bold;
    font-style: italic;
    // color: var(--light-grey);
    color: transparent;
    text-shadow: 0 0 10px #ccc;
}

p {
    font-weight: bold;
    color: var(--dark-grey);
}
</style>