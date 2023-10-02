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
        to: {
            type: String,
            default: "/404"
        },
    },
    methods: {
        handleClick() {
            // Handle button click here
            this.$emit("button-click");
        }
    },
};
</script>

<template>
    <button :class="btnClass" @click="handleClick">
        {{ buttonText }}
    </button>
</template>

<style lang="scss" scoped></style>