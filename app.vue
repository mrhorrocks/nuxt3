<template>
    <Body class="antialiased">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>

        <CookieControl locale="en">
            <template #bar>
                <h3>We Use Cookies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laborum delectus.</p>
            </template>

            <template #modal>
                <h3>Cookie Options</h3>
                <p>Changed your mind about the cookies we set?</p>
            </template>
        </CookieControl>

        <UNotifications />
    </Body>
</template>

<style>
.cookieControl__ModalContent {
    border-radius: 2rem;
    overflow: hidden;
}

.cookieControl__ModalClose {
    display: none;
}

.cookieControl__ModalButtons {
    margin-top: 0;
}
</style>