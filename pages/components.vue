<template>
    <Head>
        <Title>Components - Mr.Horrocks</Title>
        <Meta name="description" content='Components' />
    </Head>

    <h2 class="page-heading">Components</h2>

    <section aria-label="Custom Made Components">

        <h3 class="section-title">Custom Made...</h3>
        <!-- GRID -->
        <div class="lg:grid lg:grid-cols-2 lg:gap-12">
            <div class="lg:col-span-1">
                <!-- Form UI -->
                <div class="ui-item">
                    <TextField label="Name" placeholder="Name" id="13" />
                    <TextField label="Email" placeholder="Email" id="14" />
                    <TextArea label="Description" placeholder="Add description" />

                    <!-- Tabs -->
                    <Tabs 
                        title1="Check Boxes"
                        title2="Two"
                        title3="Three"
                        >
                        <!-- Tab 1 -->
                        <template #tab-one>
                            <Checkbox id="1" label="One" checked="checked" />
                            <Checkbox id="2" label="Two" />
                            <Checkbox id="3" label="Three" />
                            <br>
                            <Radio name="name" id="10" label="Yes" checked="checked" />
                            <Radio name="name" id="11" label="No" />
                            <Radio name="name" id="12" label="Maybe" />
                        </template>

                        <!-- Tab 2 -->
                        <template #tab-two>
                            Tab 2 content
                        </template>

                        <!-- Tab 2 -->
                        <template #tab-three>
                            Tab 3 content
                        </template>
                    </Tabs>

                    <Button buttonClass="button submit" linkText="Send" />
                    <Button buttonClass="button cancel" linkText="Cancel" />
                    <Button buttonClass="button reset" linkText="Reset" />

                </div>

            </div>

            <div class="lg:col-span-1">

                <!-- disclosure/accordian -->
                <div class="ui-item">
                    <Disclosure title="One" content="Content 1" />
                    <Disclosure title="Two">
                        Add content using a slot too.
                    </Disclosure>
                </div>

                <!-- Toggle -->
                <div class="ui-item">
                    <ToggleSwitch id="mySwitch" />
                </div>
                
                <!-- Range -->
                <div class="ui-item">
                    <RangeInput id="10" min="0" max="150" step="1" />
                </div>

                <!-- Buttons -->
                <div class="ui-item">
                    <SidePanel />
                    <ButtonLink to="https://github.com/mrhorrocks/nuxt3" class="w-full sm:w-[initial]"
                        linkText="Button as a link" />
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


