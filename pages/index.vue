<!-- <script setup>
definePageMeta({
    layout: 'homepage'
});
</script> -->

<template>
    <section aria-label="About this website">
        <h2 class="page-heading mb-8">About this website</h2>

        <p>You are now viewing a scalable, responsive, starter template built with 
            <a href="https://nuxt.com/" class="underline">Nuxt</a>, 
            <a href="https://tailwindcss.com/" class="underline">Tailwind</a> and 
            <a href="https://www.chartjs.org/" class="underline">Chartjs</a>.
            <a href="https://pinia.vuejs.org/ssr/nuxt.html" class="underline">Pinia</a> is pre installed for state management.</p>

        <p><ButtonLink to="https://github.com/mrhorrocks/nuxt3" class="w-full sm:w-[initial]" linkText="Install from github" /></p>

    </section>

    <!-- GRID -->
    <div class="lg:grid lg:grid-cols-3 lg:gap-12">

        <div class="lg:col-span-2">
            <section aria-label="Current Stack">
                <h3 class="section-title my-6">Current Stack</h3>
                <p>
                    <a class="chip" href="https://nuxt.com/" title="Nuxt">Nuxt</a>
                    <a class="chip" href="https://tailwindcss.com/" title="Tailwind">Tailwind</a>
                    <a class="chip" href="https://laravel.com/" title="Laravel">Laravel</a>
                    <a class="chip" href="https://www.npmjs.com/" title="NPM">NPM</a>
                    <a class="chip" href="https://sass-lang.com/" title="SCSS">SCSS</a>
                    <a class="chip" href="https://git-scm.com/" title="GIT">GIT</a>
                    <a class="chip" href="https://code.visualstudio.com/" title="VSCode">VSCode</a>
                    <a class="chip" href="https://www.mysql.com/" title="MySQL">MySQL</a>
                    <a class="chip" href="https://www.chartjs.org/" title="Chartjs">Chartjs</a>
                    <a class="chip" href="https://www.artweaver.de/en" title="Artweaver">Artweaver</a>
                    <a class="chip" href="https://inkscape.org/" title="Inkscape">Inkscape</a>
                    <a class="chip" href="https://chat.openai.com/" title="ChatGPT">ChatGPT</a>
                </p>
            </section>
            <section aria-label="Previous Stack">
                <h3 class="section-title my-6">Previous Stack</h3>
                <p>
                    <a class="chip" href="https://www.docker.com/" title="Docker">Docker</a>
                    <a class="chip" href="https://cakephp.org/" title="CakePHP">CakePHP</a>
                    <a class="chip" href="https://www.highcharts.com/" title="Highcharts">Highcharts</a>
                    <a class="chip" href="https://jquery.com/" title="Jquery">Jquery</a>
                    <a class="chip" href="https://subversion.apache.org/" title="SVN">SVN</a>
                    <a class="chip" href="https://wordpress.com/" title="">Wordpress</a>
                    <a class="chip" href="https://www.joomla.org/" title="Wordpress">Joomla</a>
                    <a class="chip" href="https://www.adobe.com/uk/" title="Adobe suite">Adobe</a>
                </p>
            </section>
        </div>

        <div class="lg:col-span-1">
            <section aria-label="Resources">
                <h3 class="section-title my-6">Resources</h3>
                <p>
                    <a class="chip" href="https://heroicons.com/" title="Hero Icons">Hero Icons</a>
                    <a class="chip" href="https://fonts.google.com/icons" title="Material Icons">Material Icons</a>
                    <a class="chip" href="https://css2sass.herokuapp.com/" title="Hero Icons">CSS to SASS</a>
                </p>
            </section>
        </div>

    </div>
    <!-- GRID-END -->
</template>