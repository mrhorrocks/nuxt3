<template>
    <Head>
        <Title>UI Libraries - A Nuxt 3 Project</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>

    <h2 class="page-heading">UI Libraries</h2>

    <section aria-label="UI Libraries">
        <div class="lg:grid grid-cols-2">
        
            <div class="col-span-1">
                <h3>Nuxt UI</h3>

                <UTooltip text="Visit the Nuxt UI Docs" class="mb-8">
                    <a href="https://ui.nuxt.com/getting-started" class="underline">Go to the Nuxt UI docs.</a>;
                </UTooltip>

                <div class="ui-item">
                    <!-- Button -->
                    <UButton>Button</UButton>&nbsp;
                    <!-- Dropdown -->
                    <Dropdown />
                </div>

                <!-- Avatar -->
                <div class="ui-item">
                    <Avatar />
                </div>

                <!-- Accordian -->
                <div class="ui-item">
                    <Accordian />
                </div>

                <!-- Keyboard -->
                <div class="ui-item">
                    <UKbd>Q</UKbd>
                    <UKbd>W</UKbd>
                    <UKbd>E</UKbd>
                    <UKbd>R</UKbd>
                    <UKbd>T</UKbd>
                    <UKbd>Y</UKbd>
                    &nbsp;&nbsp;
                    <UKbd>K</UKbd>
                    <UKbd>E</UKbd>
                    <UKbd>Y</UKbd>
                    <UKbd>B</UKbd>
                    <UKbd>O</UKbd>
                    <UKbd>A</UKbd>
                    <UKbd>R</UKbd>
                    <UKbd>D</UKbd>
                </div>

                <!-- Checkbox -->
                <div class="ui-item">
                    <form action="">
                        <Checkbox id="Yes" label="Yes" />
                        <Checkbox id="No" label="No" />
                    </form>
                </div>

                <!-- Toggle -->
                <div class="ui-item">
                    <Toggle />
                </div>

                <!-- Range -->
                <div class="ui-item">
                    <Range />
                </div>
            </div>

            <div class="col-span-1 lg:ml-8">
                <h3>Vuestic UI</h3>
                
                <UTooltip text="Visit the Vuestic UI Docs" class="mb-8">
                    <a href="https://ui.vuestic.dev/introduction/overview" class="underline">Go to the Vuestic UI Docs.</a>
                </UTooltip>
                    
            </div>

        </div>
    </section>
</template>

<style>
.ui-item {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #b6b6b6;
}

.underline {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 2px;
}
</style>