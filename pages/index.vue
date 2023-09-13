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

    <h2 class="page-heading">Made with <a href="https://nuxt.com/">Nuxt</a></h2>

    <h3>Current tech</h3>
    <p>Nuxt, Tailwind, Laravel, NPM, SCSS, GIT, VSCode, MySQL, Chartjs, Artweaver, Inkscape, ChatGPT</p>

    <h3>Previous tech</h3>
    <p>CakePHP, Highcharts, Jquery, SVN, Wordpress, Joomla, Photoshop, Dreamweaver</p>

    <h3>Resources</h3>
    <p>Hero Icons, Material Icons</p>
    
</template>