<script>
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
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
    background: #e7f0fa;
    margin-bottom: 0.5rem;

    summary {
        display: block;
        list-style: none;
        cursor: pointer;
        background-color: #60a5fa;
        color: white;
        padding: 0.5rem;
        border-radius: 0.3rem 0.3rem 0 0;
        overflow: hidden;
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
;
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