<template>
    <nuxt-link :to="to" :exact="exact" :active-class="activeClass" :class="['button', buttonClass]">
        <slot>{{ linkText }}</slot>
    </nuxt-link>
</template>
  
<script>
export default {
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
        exact: {
            type: Boolean,
            default: false,
        },
        activeClass: {
            type: String,
            default: 'active',
        },
        buttonClass: {
            type: String,
            default: '',
        },
        linkText: {
            type: String,
            required: false,
            default: 'add text'
        },
    },
};
</script>
  