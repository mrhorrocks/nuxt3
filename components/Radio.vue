<template>
    <label class="radio">
      <input type="radio" :id="id" :checked="checked" :name="name" />
      <span class="checkmark"></span>
      <span id="checkboxLabel">{{ label }}</span>
    </label>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      label: String,
      id: String,
      checked: String,
      name: String,
    },

  };
  </script>

<style>

/* Customize the label (the container) */
.radio {
  position: relative;
    display: inline-block;
    /* background-color: red; */
    cursor: pointer;
    margin-right: 2rem;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
}

/* Hide the browser's default radio button */
.radio input {
  display: none;
}

/* Create a custom radio button */
.radio .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    background-color: #eee;
    border: 2px solid #888;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio:hover input ~ .checkmark {
    background-color: var(--third-colour);
}

/* When the radio button is checked, add a blue background */
.radio input:checked ~ .checkmark {
    background-color: #eee;
    border: 2px solid var(--first-colour);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio input:checked ~ .checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.radio .checkmark:after {
    top: 4px;
    left: 4px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: #0097ef;
}

#checkboxLabel {
    /* background-color: pink; */
    display: inline-block;
    float: left;
    margin-left: 2.2rem;
    height: 2rem;
    line-height: 2;
}
</style>