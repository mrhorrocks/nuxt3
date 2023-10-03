<template>
    <label class="radio">{{ label }}
        <input type="radio" checked="checked" name="radio" />
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
    props: {
        label: String,
        name: "Default"
    },
};
</script>
