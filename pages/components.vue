<template>
    <Head>
        <Title>Components - Mr.Horrocks</Title>
        <Meta name="description" content='Components' />
    </Head>

    <h2 class="page-heading">Components</h2>

    <section aria-label="Components">

        <!-- GRID -->
        <div class="lg:grid lg:grid-cols-2 lg:gap-12">
            <div class="lg:col-span-1">
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

                <div class="ui-item">
                    <TextField label="Name" placeholder="Name" id="13" />
                    <TextField label="Email" placeholder="Email" id="14" />
                    <TextArea label="Description" placeholder="Add description" />
                    <Button buttonClass="button submit" linkText="Send" />
                    <Button buttonClass="button cancel" linkText="Cancel" />
                    <Button buttonClass="button reset" linkText="Reset" />
                </div>

            </div>
            
            <!-- Nuxt UI -->
            <!-- <div class="lg:col-span-1 lg:ml-8">
                <h3 class="section-title">Nuxt UI Components</h3>

                <UTooltip text="Visit the Nuxt UI Docs" class="mb-8">
                    <a href="https://ui.nuxt.com/getting-started" class="underline">Go to the Nuxt UI docs</a>
                </UTooltip>

                <div class="ui-item">
                    <Dropdown />
                </div>

                <div class="ui-item">
                    <Accordian />
                </div>

                <div class="ui-item modals">
                    <Modal class="w-full sm:w-[initial] mb-4" />
                    <ModalFull class="w-full sm:w-[initial] mb-4" />
                    <SideOver class="w-full sm:w-[initial] mb-4" />
                    <Notification class="w-full sm:w-[initial] mb-4" />
                </div>
                
                <div class="ui-item">
                    <Toggle />
                </div>

                <div class="ui-item">
                    <Range />
                </div>
            </div> -->

            <!-- Headless UI -->
            <div class="lg:col-span-1 lg:ml-8">
                <h3 class="section-title">Headless UI Components</h3>

                <p class="mb-8">
                    <a href="https://headlessui.com/" class="underline" text="Visit the Headless UI Docs">Go to the Headless UI docs</a>
                </p>

                <div class="ui-item">
                    <UiModal />
                </div>

                <div class="ui-item">
                    <UiDisclosure />
                </div>
            </div>

        </div>
        <!-- END-GRID -->

    </section>
</template>

<style>
.modals>div {
    display: inline-block;
    margin-right: 0.5rem;

    button {
        @apply w-full lg:w-auto;
    }
}
</style>

