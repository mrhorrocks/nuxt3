<template>
    <div @click.stop.prevent="toggleFavorite">
        <i :class="['fa', { 'fa-star': isFavorite, 'fa-star-o': !isFavorite }]"></i>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isFavorite: false,
        };
    },
    methods: {
        toggleFavorite(e) {
            this.isFavorite = !this.isFavorite;
            // e.preventDefault();
            console.log('Favourite clicked');
        },
    },
};
</script>
<style>
.fa {
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #ff0000;
    font-size: 1.3rem;
    cursor: pointer;
}

.fa-star-o:before {
    color: #000000;
}</style>