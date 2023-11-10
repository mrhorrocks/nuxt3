<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
    <div>
        <span class="count">
            Counter: {{ counter }}
        </span>

        <button class="button" @click="counter++">
            +
        </button>
        <button class="button" @click="counter--">
            -
        </button>
    </div>
</template>


<style scoped>
.count {
    display: block;
}
</style>