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
                    <TextField id="firstName" type="text" label="Name" placeholder="Name" />
                    <TextField id="emailAddress" type="text" label="Email" placeholder="Email" />
                    <TextArea id="description" label="Description" placeholder="Add description" />

                    <!-- Tabs -->
                    <Tabs 
                        title1="Checkboxes"
                        title2="Radios"
                        title3="Three"
                        >
                        <!-- Tab 1 -->
                        <template #tab-one>
                            <Checkbox id="1" label="1" checked="checked" />
                            <Checkbox id="2" label="2" />
                            <Checkbox id="3" label="3" />
                        </template>

                        <!-- Tab 2 -->
                        <template #tab-two>
                            <Radio name="name" label="Mr" id="mr" checked="checked" />
                            <Radio name="name" label="Mrs" id="Mrs" />
                            <Radio name="name" label="Ms" id="ms"/>
                        </template>

                        <!-- Tab 3 -->
                        <!-- <template #tab-three>
                            Tab 3 content
                        </template> -->
                    </Tabs>

                    <Button class="button submit" text="Send" />
                    <Button class="button cancel" text="Cancel" />
                    <Button class="button reset" text="Reset" />

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
                
                <div class="ui-item">
                    <SelectOptions label="" id="select-orgs" />
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


