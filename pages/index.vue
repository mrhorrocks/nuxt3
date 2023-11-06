<script setup lang="ts">
definePageMeta({
    layout: 'homepage'
});
</script>
<template>
    <section aria-label="About this website">
        <h2 class="page-heading mb-8">About this website</h2>

        <p>A scalable, responsive single page app built with
            <NuxtLink external href="https://nuxt.com/" class="underline" title="Nuxt">Nuxt</NuxtLink> and
            <NuxtLink external href="https://tailwindcss.com/" class="underline" title="Tailwind CSS">Tailwind</NuxtLink>.
        </p>
    </section>

    <!-- GRID -->
    <div class="lg:grid lg:grid-cols-3 lg:gap-12">

        <div class="lg:col-span-2">

            <section aria-label="Current Stack">
                <h3 class="section-title my-6">Current Stack</h3>
                <p>
                    <NuxtLink external class="chip" href="https://nuxt.com/" title="Nuxt">Nuxt</NuxtLink>
                    <NuxtLink external class="chip" href="https://tailwindcss.com/" title="Tailwind">Tailwind</NuxtLink>
                    <NuxtLink external class="chip" href="https://laravel.com/" title="Laravel">Laravel</NuxtLink>
                    <NuxtLink external class="chip" href="https://www.npmjs.com/" title="NPM">NPM</NuxtLink>
                    <NuxtLink external class="chip" href="https://sass-lang.com/" title="SCSS">SCSS</NuxtLink>
                    <NuxtLink external class="chip" href="https://git-scm.com/" title="GIT">GIT</NuxtLink>
                    <NuxtLink external class="chip" href="https://code.visualstudio.com/" title="VSCode">VSCode</NuxtLink>
                    <NuxtLink external class="chip" href="https://www.mysql.com/" title="MySQL">MySQL</NuxtLink>
                    <NuxtLink external class="chip" href="https://www.chartjs.org/" title="Chartjs">Chartjs</NuxtLink>
                    <NuxtLink external class="chip" href="https://www.artweaver.de/en" title="Artweaver">Artweaver</NuxtLink>
                    <NuxtLink external class="chip" href="https://inkscape.org/" title="Inkscape">Inkscape</NuxtLink>
                    <NuxtLink external class="chip" href="https://chat.openai.com/" title="ChatGPT">ChatGPT</NuxtLink>
                </p>
            </section>

            <section aria-label="Previous Stack">
                <h3 class="section-title my-6">Previous Stack</h3>
                <p>
                    <NuxtLink external class="chip" href="https://www.docker.com/" title="Docker">Docker</NuxtLink>
                    <NuxtLink external class="chip" href="https://cakephp.org/" title="CakePHP">CakePHP</NuxtLink>
                    <NuxtLink external class="chip" href="https://www.highcharts.com/" title="Highcharts">Highcharts</NuxtLink>
                    <NuxtLink external class="chip" href="https://jquery.com/" title="Jquery">Jquery</NuxtLink>
                    <NuxtLink external class="chip" href="https://subversion.apache.org/" title="SVN">SVN</NuxtLink>
                    <NuxtLink external class="chip" href="https://wordpress.com/" title="">Wordpress</NuxtLink>
                    <NuxtLink external class="chip" href="https://www.joomla.org/" title="Wordpress">Joomla</NuxtLink>
                    <NuxtLink external class="chip" href="https://www.adobe.com/uk/" title="Adobe suite">Adobe</NuxtLink>
                </p>
            </section>

        </div>

        <div class="lg:col-span-1">
            <section aria-label="Resources">
                <h3 class="section-title my-6">Resources</h3>
                <p>
                    <NuxtLink external class="chip" href="https://heroicons.com/" title="Hero Icons">Hero Icons</NuxtLink>
                    <NuxtLink external class="chip" href="https://fonts.google.com/icons" title="Material Icons">Material
                        Icons</NuxtLink>
                    <NuxtLink external class="chip" href="https://css2sass.herokuapp.com/" title="Hero Icons">CSS to SASS
                    </NuxtLink>
                </p>
            </section>
        </div>

    </div>
</template>