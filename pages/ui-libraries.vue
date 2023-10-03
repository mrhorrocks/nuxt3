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
                    <!-- Dropdown -->
                    <Dropdown />
                </div>

                <!-- Accordian -->
                <div class="ui-item">
                    <Accordian />
                </div>

                <div class="ui-item modals">
                    <!-- Modal -->
                    <Modal class="w-full sm:w-[initial] mb-4" />
                    <!-- Fullscreen Modal-->
                    <ModalFull class="w-full sm:w-[initial] mb-4" />
                    <!-- SideOver-->
                    <SideOver class="w-full sm:w-[initial] mb-4" />
                    <!-- Notification-->
                    <Notification class="w-full sm:w-[initial] mb-4" />
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
                <h3 class="section-title">Bespoke Components</h3>

                <div class="ui-item">
                    <ButtonLink to="https://github.com/mrhorrocks/nuxt3" class="w-full sm:w-[initial]"
                        linkText="Install from github" />
                </div>

                <div class="ui-item">
                    <Checkbox id="1" label="One" checked="checked" />
                    <Checkbox id="2" label="Two" />
                    <Checkbox id="3" label="Three" />
                    <Checkbox id="4" label="Bespoke Components" checked="checked" />
                </div>

                <div class="ui-item">
                    <form autocomplete="on">
                        <Radio name="name" id="10" label="Yes" checked="checked" />
                        <Radio name="name" id="11" label="No" />
                        <Radio name="name" id="12" label="Maybe" />
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<style>
.modals > div {
    display: inline-block;
    margin-right: 0.5rem;

    button {
        @apply w-full lg:w-auto;
    }
}
</style>

