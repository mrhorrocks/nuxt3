<template>
    <div class="tabs">

        <div class="tab">
            <input type="radio" id="tab-1" name="tab-group-1" checked>
            <label for="tab-1">Tab One</label>
            <div class="content">
                <slot name="tab-one" />
            </div>
        </div>

        <div class="tab">
            <input type="radio" id="tab-2" name="tab-group-1">
            <label for="tab-2">Tab Two</label>
            <div class="content">
                <slot name="tab-two" />
            </div>
        </div>

        <div class="tab">
            <input type="radio" id="tab-3" name="tab-group-1">
            <label for="tab-3">Tab Three</label>
            <div class="content">
                <slot name="tab-three" />
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.tabs {
    position: relative;
    min-height: 200px;
    /* This part sucks */
    clear: both;
    margin: 25px 0;
}

.tab {
    float: left;
}

.tab label {
    position: relative;
    left: 1px;
    background: #c6e1ff;
    padding: 6px 15px;
    border: 1px solid #ccc;
    margin-left: -1px;
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
    background: white;
    right: 0;
    bottom: 0;
    padding: 15px;
    border: 1px solid #ccc;
    overflow: hidden;

    & p {
        font-size: 1rem;
    }
}

.content>* {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.6s ease;
}

// [type="radio"]:focus~label {
//     ouline: 2px solid blue;
// }

[type="radio"]:checked~label {
    background: white;
    border-bottom: 1px solid white;
    z-index: 2;
}

[type="radio"]:checked~label~.content {
    z-index: 1;
}

[type="radio"]:checked~label~.content>* {
    opacity: 1;
    transform: translateX(0);
}
</style>
