<template>
    <div class="textfield">
        <label :for="id">{{ label }}</label>
        <input
            type="text"
            :id="id"
            :placeholder="placeholder"
            :disabled="disabled"
        />
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            default: "",
        },
        id: String,
        label: String,
        disabled: String,
    },
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
        z-index: 1;
        top: -7px;
        left: 0.5rem;
        background: white;
        font-size: 0.75rem;
        padding: 0 0.3rem;
    }
    input {
        border: 2px solid var(--first-colour);
        border-radius: 5px;
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
            border-color:#ccc;
            color: #eee;
        }
        label {
            color: #eee;
        }
    }
    &--error {
        input {
            border-color: red;
            color:  green;
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