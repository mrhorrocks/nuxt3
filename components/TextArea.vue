<template>
    <div class="textarea">
        <label for="textarea">{{ label }}</label>
        <textarea
            id="textarea"
            :placeholder="placeholder"
            :disabled="disabled"
        />
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        disabled: String,
        placeholder: "",
    },
};
</script>

<style>
div.textarea {
    position: relative;
    label {
        position: absolute;
        background: white;
        top: 0px;
        left: 0.5rem;
        font-size: 0.75rem;
        padding: 0 0.3rem;
    }
    textarea {
        border: 2px solid var(--first-colour);
        border-radius: 4px;
        line-height: 40px;
        width: 100%;
        @apply md:w-[95%];
        font-size: 1rem;
        text-indent: 0.5rem;
        margin: 0.5rem 0.5rem 0.5rem 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    textarea:disabled {
        border: 2px solid #95989a;
    }
    &--full-width {
        textarea {
            min-width: 100%;
        }
    }
}

</style>