<template>
    <label class="switch" :for="id">
        <input type="checkbox" :id="id" v-model="isChecked">
        <span class="slider round"></span>
    </label>
    <span class="switch-status">{{ isChecked ? 'Yes' : 'No' }}</span>
</template>
  
<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isChecked: true
        };
    },
};
</script>
  
<style scoped>
/* CSS for the switch component */
.switch {
    position: relative;
    display: flex;
    float: left;
    width: 60px;
    height: 36px;
}
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
.switch-status {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 0.5rem;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
}
.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
}
input:checked+.slider {
    background-color: #5cd5eb;
}
/* input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
} */
input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
</style>