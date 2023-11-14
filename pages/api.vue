<script setup lang="ts">
const { data } = await useFetch('/api/nba')
</script>

<template>
    <div v-for="team in data?.data" :key="team.id" class="team">
        {{ team.full_name }} <br>
    </div>
</template>

<style lang="scss" scoped>
.team {
    background-color: pink;
    margin-bottom: 0.5rem;
}

</style>