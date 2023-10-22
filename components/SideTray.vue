<template>
    <div class="sidetray">
        <!-- Open/Close -->
        <Button 
            v-if="!sideTray"
            @click="toggleMenu" 
            buttonClass="button" 
            linkText="Open Side Panel" />

        <Button 
            v-if="sideTray"
            @click="toggleMenu" 
            buttonClass="button" 
            linkText="Close Side Panel" />

        <!-- Modal bg -->
        <div v-if="sideTray" @click="closeSideTray" class="modal-bg"></div>
        <!-- Modal bg -->

        <div v-if="sideTray" class="side-tray">
            <ul>
                <li><NuxtLink to="/" title="Home">Home</NuxtLink></li>
                <li><NuxtLink to="/components" title="Components">Components</NuxtLink></li>
                <li><NuxtLink to="/charts" title="Charts">Charts</NuxtLink></li>
            </ul> 
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            sideTray: false,
        };
    },
    methods: {
        toggleMenu() {
            this.sideTray = !this.sideTray;
        },
        closeSideTray() {
            this.sideTray = false;
        },
    },
};
</script>

<style scoped>
    button {
        margin-top: 0;        
    }
    .modal-bg {
        position: fixed;
        z-index: 50;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #e5e7eb;
        opacity: 50%;
    }
    .side-tray {
        position: absolute;
        z-index: 51;
        top: 0;
        right: 0;
        height: 100%;
        max-width: 450px;
        background-color: white;
        padding: 1rem;
        @apply
        w-screen
        max-w-md
        shadow-lg 
        transform 
        translate-x-0 
        transition-transform 
        ease-in-out 
        duration-1000;
    }
</style>
  