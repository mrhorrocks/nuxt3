<template>
    <button>
        <slot>{{ text }}</slot>
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: false,
            default: 'Add text prop'
        },
    },
};
</script>
  