<template>
    <Head>
        <Title>Components - Mr.Horrocks</Title>
        <Meta name="description" content='Components' />
    </Head>

    <h2 class="page-heading">Components</h2>

    <section aria-label="Custom Made Components">

        <!-- GRID -->
        <div class="lg:grid lg:grid-cols-2 lg:gap-12">
            <div class="lg:col-span-1">
                <h3 class="section-title">Custom Made Components</h3>

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

            <!-- Bespoke Components -->
            <div class="lg:col-span-1">

                <div class="ui-item">
                    <RangeInput id="10" min="0" max="150" step="1" />
                </div>

                <div class="ui-item">
                    <ToggleSwitch id="mySwitch" />
                </div>

                <div class="ui-item">
                    <Disclosure title="Title One" content="Content 1" />
                    <Disclosure title="Title Two">
                        Add content using a slot too.
                    </Disclosure>
                </div>

                <div class="ui-item">
                    <Tabs>
                        <!-- Tab 1 -->
                        <template #tab-one>
                            Tab 1 content slot
                        </template>

                        <!-- Tab 2 -->
                        <template #tab-two>
                            Tab 2 content slot
                        </template>

                        <!-- Tab 3 -->
                        <template #tab-three>
                            Tab 3 content slot
                        </template>
                    </Tabs>
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


