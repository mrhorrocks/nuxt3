<template>
    <Head>
        <Title>UI Libraries - A Nuxt 3 Project</Title>
        <Meta name="description" content='Chart Libraries' />
    </Head>

    <h2 class="page-heading">UI Libraries</h2>

    <section aria-label="UI Libraries">
        <h3>Nuxt UI</h3>
        
        <p>A few pebuilt components using 
            <UTooltip text="Visit the Nuxt UI Docs">
                <a href="https://ui.nuxt.com/" class="underline">Nuxt UI</a>
            </UTooltip>
        </p>
        
        <div class="ui-item">
            <UButton>Button</UButton>
        </div>
        
        <!-- Avatar -->
        <div class="ui-item">
            <Avatar />
        </div>
        
        <!-- Accordian -->
        <div class="ui-item">
            <Accordian />
        </div>
        
        <!-- Keyboard -->
        <div class="ui-item">
            <UKbd>Q</UKbd>
            <UKbd>W</UKbd>
            <UKbd>E</UKbd>
            <UKbd>R</UKbd>
            <UKbd>T</UKbd>
            <UKbd>Y</UKbd>
            &nbsp;&nbsp;
            <UKbd>K</UKbd>
            <UKbd>E</UKbd>
            <UKbd>Y</UKbd>
            <UKbd>B</UKbd>
            <UKbd>O</UKbd>
            <UKbd>A</UKbd>
            <UKbd>R</UKbd>
            <UKbd>D</UKbd>
        </div>
        
        <!-- Checkbox -->
        <div class="ui-item">
            <form action="">
                <Checkbox id="Yes" label="Yes" />
                <Checkbox id="No" label="No" />
            </form>
        </div>
        
        <!-- Toggle -->
        <div class="ui-item">
            <Toggle />
        </div>
        
        <!-- Range -->
        <div class="ui-item">
            <Range />
        </div>
        
        <!-- Dropdown -->
        <div class="ui-item">
            <Dropdown />
        </div>
    </section>

</template>

<style scoped>
.ui-item {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #b6b6b6;
}

.underline {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 2px;
}
    
</style>