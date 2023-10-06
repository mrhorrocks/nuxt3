<template>
    <Disclosure as="div" v-slot="{ open }" class="disclosure">
        <DisclosureButton class="disclosureButton">
            <span>What is your refund policy?</span>
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="chevronUpIcon" />
        </DisclosureButton>

        <DisclosurePanel class="disclosurePanel">
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
        </DisclosurePanel>
    </Disclosure>

    <Disclosure as="div" v-slot="{ open }" class="disclosure">
        <DisclosureButton class="disclosureButton">
            <span>Do you offer technical support?</span>
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="chevronUpIcon" />
        </DisclosureButton>

        <DisclosurePanel class="disclosurePanel">
            No.
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
}

.chevronUpIcon {
    @apply 
    h-5 
    w-5 
    text-white;
}

</style>
