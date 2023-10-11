<template>
    <Body class="antialiased">
        <NuxtLayout>
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