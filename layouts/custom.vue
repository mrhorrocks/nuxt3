<template>
    <div class="flex flex-col min-h-screen">
        <TheHeader />
        <main class="main container mx-auto mt-4 px-2">
            <slot />
        </main>
        <TheFooter />
    </div>
</template>
