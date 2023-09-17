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

    <h2 class="page-heading">Front-End Web Developer</h2>

    <h3>Current tech</h3>
    <p>
        <a class="chip" href="https://nuxt.com/" alt="Nuxt">Nuxt</a>
        <a class="chip" href="https://tailwindcss.com/" alt="Tailwind">Tailwind</a>
        <a class="chip" href="https://laravel.com/" alt="Laravel">Laravel</a>
        <a class="chip" href="https://www.npmjs.com/" alt="NPM">NPM</a>
        <a class="chip" href="https://sass-lang.com/" alt="SCSS">SCSS</a>
        <a class="chip" href="https://git-scm.com/" alt="GIT">GIT</a>
        <a class="chip" href="https://code.visualstudio.com/" alt="VSCode">VSCode</a>
        <a class="chip" href="https://www.mysql.com/" alt="MySQL">MySQL</a>
        <a class="chip" href="https://www.chartjs.org/" alt="Chartjs">Chartjs</a>
        <a class="chip" href="https://www.artweaver.de/en" alt="Artweaver">Artweaver</a>
        <a class="chip" href="https://inkscape.org/" alt="Inkscape">Inkscape</a>
        <a class="chip" href="https://chat.openai.com/" alt="ChatGPT">ChatGPT</a>
    </p>

    <h3>Previous tech</h3>
    <p>
        <a class="chip" href="https://cakephp.org/" alt="CakePHP">CakePHP</a>
        <a class="chip" href="https://www.highcharts.com/" alt="Highcharts">Highcharts</a>
        <a class="chip" href="https://jquery.com/" alt="Jquery">Jquery</a>
        <a class="chip" href="https://subversion.apache.org/" alt="SVN">SVN</a>
        <a class="chip" href="https://wordpress.com/" alt="">Wordpress</a>
        <a class="chip" href="https://www.joomla.org/" alt="Wordpress">Joomla</a>
        <a class="chip" href="https://www.adobe.com/uk/" alt="Adobe suite">Adobe suite</a>
    </p>

    <h3>Resources</h3>
    <p>
        <a class="chip" href="https://heroicons.com/" alt="Hero Icons">Hero Icons</a>
    </p>
    
</template>