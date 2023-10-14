<template>
    <div>
        <label :for="id">{{ label }}</label>
        <input 
            type="range" 
            :id="id" 
            :name="id" 
            :min="min" 
            :max="max"  
            :step="step" 
            v-model="rangeValue" @input="updateValue" />
        <span class="updated-value">{{ rangeValue }}</span>
    </div>
</template>
  
<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        min: {
            type: String,
            default: 0,
        },
        max: {
            type: String,
            default: 100,
        },
        step: {
            type: String,
            default: 1,
        },
        label: {
            type: String,
            required: false,
            // default: 'Add Label'
        },
    },
    data() {
        return {
            rangeValue: 0,
        };
    },
    methods: {
        updateValue() {
            // The rangeValue is automatically updated by v-model
        },
    },
};
</script>

<style scoped>
label {
    width: 100%;
    display: inline-block;
    padding: 10px 0; 
}
.updated-value {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
}
/********** Range Input Styles **********/
/*Range Reset*/
input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
}

/* Removes default focus */
input[type="range"]:focus {
    outline: none;
}

/***** Chrome, Safari, Opera and Edge Chromium styles *****/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
    background-color: #ccc;
    border-radius: 0.5rem;
    height: 0.5rem;
    position: relative;
    z-index: 10;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    margin-top: -12px;
    /* Centers thumb on the track */

    /*custom styles*/
    background-color: #5cd5eb;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    box-shadow: 0px 3px 3px #ccc;
    &:hover {
        background-color: #379cad;
    }
    &:active {
        background-color: red;
    }
}

input[type="range"]:focus::-webkit-slider-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.0rem; /* The gap between thr border */
}











/******** Firefox styles ********/
/* slider track */
input[type="range"]::-moz-range-track {
    background-color: #ccc;
    border-radius: 0.5rem;
    height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
    border: none;
    /*Removes extra border that FF applies*/
    border-radius: 0;
    /*Removes default border-radius that FF applies*/

    /*custom styles*/
    background-color: #5cd5eb;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    box-shadow: 0px 3px 3px #ccc;
    &:hover {
        background-color: #379cad;
    }
    &:active {
        background-color: red;
    }

}

input[type="range"]:focus::-moz-range-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.0rem; /* The gap between thr border */
}
</style>
