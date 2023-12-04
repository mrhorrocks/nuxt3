<template>
    <div class="textarea">
        <label :for="id">{{ label }}</label>
        <textarea
            :id="id"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :autocomplete="id" 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String
        },
        type: {
            type: String,
            default: "text"
        },
        label: {
            type: String
        },
        placeholder: {
            type: String,
            default: ""
        },
        disabled: {
            type: String
        },
        required: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: String // Assuming modelValue is a string type
        },
    },
    emits: ['update:modelValue']
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
        border-radius: 0rem;
        line-height: 1.5rem;
        width: 100%;
        height: 110px;
        font-size: 1rem;
        padding: 1rem 0.5rem;
        margin: 0.5rem 0.5rem 0.5rem 0;
        font-family: Arial, Helvetica, sans-serif;
        @apply md:w-[95%];
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