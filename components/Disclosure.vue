<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Add a title prop'
        },
        content: {
            type: String
        },
    }
};
</script>

<template>
    <details>
        <summary>{{ title }}</summary>
        <div class="content">
            {{ content }}
            <slot />
        </div>
    </details>
</template>

<style scss scoped>
details {
    background: var(--third-colour);
    margin-bottom: 0.1rem;

    summary {
        overflow: hidden;
        display: block;
        list-style: none;
        padding: 0.5rem;
        background-color: var(--first-colour);
        color: white;
        cursor: pointer;
    }

    /* Create a new custom triangle on the right side */
    summary::after {
        position: relative;
        top: 2px;
        left: -12px;
        float: right;
        content: '>';
        transition: 0.1s;
        line-height: 1;
        transform: rotate(-90deg) scaleY(2);
    }

    .content {
        padding: 1rem;
    }
}

details[open]>summary::after { 
    transform: rotate(90deg) scaleY(2);
    top: 3px;
    left: -4px;
} 
</style>