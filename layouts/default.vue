<template>
    <div class="flex flex-col min-h-screen">
        <TheHeader />
        <main class="container mx-auto p-4 grow items-start">
            Default
            <slot />
        </main>
        <TheFooter />
    </div>
</template>
