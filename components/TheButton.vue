
<template>
    <button :class="btnClass" @click="handleClick">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true,
        },
        btnClass: {
            type: String,
            default: "button",
        },
    },
    methods: {
        handleClick() {
            // Handle button click here
            this.$emit("button-click");
        }
    },
};
</script>#