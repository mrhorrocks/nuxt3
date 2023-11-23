<template>
    <div class="textfield">
        <label :for="id">{{ label }}</label>
        <input 
            :type="type"
            :id="id"
            :placeholder="placeholder"
            :disabled="disabled"
            :value="modelValue"
            :required="required"
            @input="$emit('update:modelValue', $event.target.value)"
            :autocomplete="id" />
    </div>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: "text"
        },
        label: {
            type: String
        },
        id: {
            type: String
        },
        disabled: {
            type: String
        },
        placeholder: {
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
div.textfield {
    position: relative;
    display: inline-block;
    width: 100%;
    @apply md:w-[50%];

    :focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
    }

    label {
        position: absolute;
        top: -7px;
        left: 0.5rem;
        font-size: 0.75rem;
        padding: 0 0.3rem;
        background: white;
    }

    input {
        border: 2px solid var(--first-colour);
        border-radius: 0.5rem;
        line-height: 40px;
        min-width: 100%;
        @apply md:min-w-[90%];
        font-size: 1rem;
        text-indent: 0.5rem;
        margin: 0 0.5rem 1.5rem 0;
    }

    input:disabled {
        border: 2px solid #95989a;
    }

    &--disabled {
        input {
            border-color: #ccc;
            color: #eee;
        }

        label {
            color: #eee;
        }
    }

    &--error {
        input {
            border-color: red;
            color: green;
        }

        label {
            color: red
        }
    }

    &--button {
        input {
            border-radius: 5px 0 0 5px;
            margin-right: 0.1rem;
        }
    }
}
</style>