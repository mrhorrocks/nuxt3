<template>
    <Head>
        <Title>Todos - Mr.Horrocks</Title>
        <Meta name="description" content='Things to do' />
    </Head>
    <h2 class="page-heading">Todos</h2>

    <section aria-label="Todo Lists" class="lg:grid grid-cols-2">
        <div>
            <h3 class="section-title">Stage 1</h3>
            <ol class="list-decimal pl-4">
                <li><s>Chartjs</s></li>
                <li><s>Google charts</s></li>
                <li><s>404 page build</s></li>
                <li><s>Add Nuxt UI</s></li>
                <li>Update the <a href="https://github.com/mrhorrocks/nuxt3/wiki/Additional-Notes">Wiki</a></li>
                <li>Cookie banner</li>
            </ol>
        </div>

        <div class="lg:ml-8">
            <h3 class="section-title">Stage 2</h3>
            <ol class="list-decimal pl-4">
                <li>Headless cms</li>
                <li>Connect to a database using MySQL/SQlite or GraphQL</li>
                <li>Manipulate database data with UI components</li>
                <li>Add authentication</li>
                <li>Visual redesign</li>
            </ol>
        </div>
    </section>
</template>
