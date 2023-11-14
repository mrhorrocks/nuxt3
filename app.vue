<template>
    <Body class="antialiased">
        
        <NuxtLayout>
            <NuxtLoadingIndicator />
            <NuxtPage />
        </NuxtLayout>

        <CookieControl locale="en">
            <template #bar>
                <h3>Just another cookie banner</h3>
                <p>Click the accept or decline button to hide this banner. 
                    Your choice will be saved in a cookie.</p>
            </template>

            <template #modal>
                <h3>Cookie Options</h3>
                <p>Changed your mind?</p>
            </template>
        </CookieControl>
    </Body>
</template>

<script setup lang="ts">
// useSeoMeta({
//   title: 'Mr.Horrocks - Front-End Web Developer',
//   ogTitle: 'Mr.Horrocks - Front-End Web Developer',
//   description: 'Mr.Horrocks testing website',
//   ogDescription: 'Mr.Horrocks testing website',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })
</script>