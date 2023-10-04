<!-- <script setup>
definePageMeta({
    layout: 'homepage'
});
</script> -->

<template>
    <section aria-label="About this website">
        <h2 class="page-heading mb-8">About this website</h2>

        <p>A scalable, responsive, starter template built with Nuxt.Js. Tailwindcss, Chartjs, Nuxt UI and Pinia are pre installed.</p>

        <p>
            <ButtonLink 
                to="https://github.com/mrhorrocks/nuxt3" 
                class="w-full sm:w-[initial]" 
                linkText="Install from github" />
        </p>

    </section>

    <section aria-label="Current Stack">
        <h3 class="section-title">Current Stack</h3>
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
    </section>

    <section aria-label="Previous Stack">
        <h3 class="section-title">Previous Stack</h3>
        <p>
            <a class="chip" href="https://www.docker.com/" alt="Docker">Docker</a>
            <a class="chip" href="https://cakephp.org/" alt="CakePHP">CakePHP</a>
            <a class="chip" href="https://www.highcharts.com/" alt="Highcharts">Highcharts</a>
            <a class="chip" href="https://jquery.com/" alt="Jquery">Jquery</a>
            <a class="chip" href="https://subversion.apache.org/" alt="SVN">SVN</a>
            <a class="chip" href="https://wordpress.com/" alt="">Wordpress</a>
            <a class="chip" href="https://www.joomla.org/" alt="Wordpress">Joomla</a>
            <a class="chip" href="https://www.adobe.com/uk/" alt="Adobe suite">Adobe</a>
        </p>
    </section>

    <section aria-label="Resources">
        <h3 class="section-title">Resources</h3>
        <p>
            <a class="chip" href="https://heroicons.com/" alt="Hero Icons">Hero Icons</a>
            <a class="chip" href="https://css2sass.herokuapp.com/" alt="Hero Icons">CSS to SASS</a>
        </p>
    </section>
</template>