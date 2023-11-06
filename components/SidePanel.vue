<template>
    <div class="sidePanel">
        <!-- Activation button -->
        <Button v-if="!sidePanel" @click="togglePanel" buttonClass="button" linkText="Open Side Panel" />
        <Button v-if="sidePanel" @click="togglePanel" buttonClass="button" linkText="Close Side Panel" />

        <!-- Modal background -->
        <div v-if="sidePanel" @click="closeSidePanel" class="modal-bg"></div>

        <!-- Content -->
        <div v-if="sidePanel" class="side-panel">

            <!-- Close panel -->
            <!-- <a @click.stop="togglePanel" class="close-panel">Close native</a> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-x-circle close-panel"
                @click.stop="closeSidePanel">
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
            </svg>
            
            <!-- Add content here -->
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            sidePanel: false,
        };
    },
    methods: {
        togglePanel() {
            this.sidePanel = !this.sidePanel;
        },
        closeSidePanel() {
            this.sidePanel = false;
        }
    },
};
</script>

<style scoped>
.button {
    float: left;
}
button.close-panel {
    margin-top: 0;
    float: right;
}

.close-panel {
    display: block;
    float: right;
    cursor: pointer;
    color: #888;
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

.side-panel {
    position: fixed;
    z-index: 51;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 450px;
    background-color: white;
    padding: 1rem;
    transition-duration: 1000ms;
    @apply w-screen max-w-md shadow-lg transform translate-x-0 transition-transform ease-in-out
    /* duration-1000; */
}</style>
  