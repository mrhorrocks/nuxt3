<template>
    <label class="radio" :for="id">
        <input 
        type="radio" 
        :id="id" 
        :checked="checked" 
        autocomplete="on"
        :name="name" 
        :value="value"
        @input="$emit('update:modelValue', $event.target.value)" />

        <span class="radiomark"></span>
        <span class="radiobuttonLabel">{{ label }}</span>
    </label>
</template>
  
<script>
export default {
    props: {
        value: {
            type: String,
            default: "false",
        },
        id: {
            type: String
        },
        name: {
            type: String,
            default: "name"
        },
        label: {
            type: String
        },
        checked: {
            type: String
        },
        modelValue: {
            type: String // Assuming modelValue is a string type
        },
        emits: ['update:modelValue']
    },

};
</script>

<style>
/* Customize the label (the container) */
.radio {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin-right: 2.4rem;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

/* Hide the browser's default radio button */
.radio input {
    display: none;
}

/* Create a custom radio button */
.radio .radiomark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 2px solid #888;
    border-radius: 50%;
    box-sizing: content-box;
}

/* On mouse-over, add a grey background color */
.radio:hover input~.radiomark {
    background-color: var(--third-colour);
}

/* When the radio button is checked, add a blue background */
.radio input:checked~.radiomark {
    border: 2px solid var(--first-colour);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radiomark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio input:checked~.radiomark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.radio .radiomark:after {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0097ef;
}

.radiobuttonLabel {
    display: inline-block;
    float: left;
    margin-left: 2.2rem;
    height: 1.6rem;
    line-height: 1.5;
}
</style>