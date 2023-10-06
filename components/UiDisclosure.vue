<template>
    <Disclosure as="div" v-slot="{ open }" class="disclosure">
        <DisclosureButton class="disclosureButton">
            <span>Draw #1</span>
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="chevronUpIcon" />
        </DisclosureButton>

        <DisclosurePanel class="disclosurePanel">
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Deleniti impedit esse quaerat 
            eos veritatis? Amet aut est ratione tempora. Nostrum?
        </DisclosurePanel>
    </Disclosure>

    <Disclosure as="div" v-slot="{ open }" class="disclosure">
        <DisclosureButton class="disclosureButton">
            <span>Draw #2</span>
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="chevronUpIcon" />
        </DisclosureButton>

        <DisclosurePanel class="disclosurePanel">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero dolore, soluta laudantium dolores facilis deleniti 
            error commodi voluptatem? Temporibus, blanditiis.
        </DisclosurePanel>
    </Disclosure>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>

<style>
.disclosure {
    margin-top: 0.5rem;
}

.disclosureButton {
    border-radius: 0.3rem 0.3rem 0 0;
    @apply
    flex 
    w-full 
    justify-between 
    text-white 
    bg-blue-400 
    hover:bg-blue-300 
    px-4 
    py-2 
    text-left 
    focus:outline-none 
    focus-visible:ring 
    focus-visible:ring-blue-500 
    focus-visible:ring-opacity-75;
}

.disclosurePanel {
    @apply 
    px-4 
    pt-4 
    pb-2 
    text-sm 
    text-gray-500;
    background: #e7f0fa;
}

.chevronUpIcon {
    @apply 
    h-5 
    w-5 
    text-white;
}

</style>
