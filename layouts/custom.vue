<template>
    <div class="flex flex-col min-h-screen">
        <TheHeader />
        <main class="container mx-auto grow items-start">
            Custom
            <slot />
        </main>
        <TheFooter />
    </div>
</template>
