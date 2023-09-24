<template>
    <Head>
        <Title>UI Libraries - A Nuxt 3 Project</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>

    <h2 class="page-heading">UI Libraries</h2>

        <div class="lg:grid grid-cols-2">
            <section aria-label="Nuxt UI Components">
                <div class="col-span-1">
                    <h3 class="section-title">Nuxt UI Components</h3>

                    <UTooltip text="Visit the Nuxt UI Docs" class="mb-8">
                        <a href="https://ui.nuxt.com/getting-started" class="underline">Go to the Nuxt UI docs</a>
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
            </section>

            <section aria-label="Vuestic UI Components">
                <div class="col-span-1 lg:ml-8">
                    <h3 class="section-title">Vuestic UI Components</h3>
                    
                    <UTooltip text="Visit the Vuestic UI Docs" class="mb-8">
                        <a href="https://ui.vuestic.dev/introduction/overview" class="underline">Go to the Vuestic UI Docs</a>
                    </UTooltip>
                        
                </div>
            </section>
        </div>
</template>