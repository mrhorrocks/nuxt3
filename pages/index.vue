<script setup>
    definePageMeta({
    // Choose a layout for this page
    layout: 'homepage'
});

    // Override the head content like this too
    useHead({
        title: 'Mr. Horrocks',
        meta: {name: 'description', content: 'A Nuxt 3 Project - Homepage'}
    })
</script>

<template>

    <h2 class="page-heading">I make fast responsive websites using <a href="https://nuxt.com/">Nuxt.js</a></h2>

    <h2>Current Tech</h2>
    <p>Nuxt 3, Tailwind, Laravel, NPM, SCSS, GIT, MySQL, Chartjs, Artweaver, Inkscape, VSCode</p>

    <h2>Past Tech</h2>
    <p>CakePHP, Highcharts, Jquery, SVN, Wordpress, Joomla, Photoshop, Dreamweaver</p>

    <h2>Resources</h2>
    <p>Hero Icons, Material Icons</p>
    
</template>