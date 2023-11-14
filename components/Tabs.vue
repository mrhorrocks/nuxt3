<script>
export default {
    props: {
        title1: String,
        title2: String,
        title3: String,
    },
};
</script>

<template>
    <div class="tabs">
        <div class="tab">
            <input type="radio" id="tab-1" name="tab-group-1" checked>
            <label for="tab-1">{{ title1 }}</label>
            <div class="content">
                <p>
                    <slot name="tab-one">
                    </slot>
                </p>
            </div>
        </div>

        <div class="tab">
            <input type="radio" id="tab-2" name="tab-group-1">
            <label for="tab-2">{{ title2 }}</label>
            <div class="content">
                <p>
                    <slot name="tab-two" />
                </p>
            </div>
        </div>

        <div class="tab">
            <input type="radio" id="tab-3" name="tab-group-1">
            <label for="tab-3">{{ title3 }}</label>
            <div class="content">
                <p>
                    <slot name="tab-three" />
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tabs {
    position: relative;
    min-height: 200px;
    width: 95%;
    margin: 1.5rem 0rem;
    clear: both;
}

.tab {
    float: left;

    &:last-child {
        label {
            border-right: 2px solid var(--first-colour);
        }
    }
}

.tab label {
    position: relative;
    left: 1px;
    top: 1px;
    padding: 0.3rem 2rem;
    border: 2px solid var(--first-colour);
    border-right-width: 1px;
    margin-left: -1px;
    background: #c6e1ff;
    cursor: pointer;
}

.tab [type="radio"] {
    opacity: 0;
    display: none;
}

.content {
    position: absolute;
    top: 28px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    border: 2px solid var(--first-colour);
    background: white;
    overflow: auto;

    & p {
        font-size: 1rem;
    }
}

.content>* {
    opacity: 0;
    // transform: translateX(-100%);
    transition: all 0.6s ease;
}

// Selected Tab
[type="radio"]:checked~label {
    background: white;
    border-bottom: 2px solid white;
    // border-right: 2px solid var(--first-colour);
    z-index: 2;
}

// Selected content
[type="radio"]:checked~label~.content {
    z-index: 1;
}

// All content 
[type="radio"]:checked~label~.content>* {
    opacity: 1;
    transform: translateX(0);
}</style>
