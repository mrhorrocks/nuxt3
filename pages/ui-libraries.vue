<template>
    <Head>
        <Title>UI Libraries - Mr.Horrocks</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>

    <h2 class="page-heading">UI Libraries</h2>


    <section aria-label="Nuxt UI Components">
        <div class="lg:grid grid-cols-2">
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

            <div class="col-span-1 lg:ml-8 lg:mt-32">
                <div class="ui-item modals">
                    <!-- Modal -->
                    <Modal />
                    <!-- Fullscreen Modal-->
                    <ModalFull />
                </div>

                <div class="ui-item">
                    <!-- SideOver-->
                    <SideOver />
                </div>

                <div class="ui-item">
                    <!-- Notification-->
                    <Notification />
                    <!-- 
                        <UNotifications /> is placed here for code clarity. 
                        In production it should be placed in once app.vue 
                        or in one of the /layouts.
                    -->
                    <UNotifications />
                </div>

            </div>
        </div>
    </section>
</template>

<style>
.modals > div {
    display: inline-block;
    margin-right: 0.5rem;
}

</style>