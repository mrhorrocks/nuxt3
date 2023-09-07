<template>
    <div class="flex flex-col min-h-screen">
        <TheHeader />
        <main class="main container mx-auto mt-4 px-2">
            <slot />
        </main>
        <div class="w-full">
            <svg data-v-28a3fc44="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.281 145.82">
                <path data-v-28a3fc44=""
                    d="M4221-1918.177s334.258-105.245,817.4-13.84,1103.883-108.889,1103.883-108.889v145.82H4221Z"
                    transform="translate(-4221 2040.906)" fill="#93c5fd"></path>
            </svg>
        </div>
        <TheFooter />
    </div>
</template>
