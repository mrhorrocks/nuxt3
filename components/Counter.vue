<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
    <div>
        <span class="count">
            Counter: {{ counter }}
        </span>

        <Button class="button" @click="counter++">
            +
        </Button>
        <Button class="button" @click="counter--">
            -
        </Button>
    </div>
</template>


<style scoped>
.count {
    display: block;
}
</style>