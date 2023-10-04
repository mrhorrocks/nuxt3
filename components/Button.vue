<template>
    <button :class="buttonClass">
        <slot>{{ linkText }}</slot>
    </button>
</template>

<script>
export default {
    props: {
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
  