<template>
    <Button class="button" text="Copy" @click="copyToClipboard" />
    <div ref="copyContent" class=" mt-4">
        <!-- Content you want to copy -->
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    methods: {
        copyToClipboard() {
            const textToCopy = this.$refs.copyContent.innerText;

            if (!textToCopy) {
                console.error('No text to copy');
                return;
            }

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    console.log('Text copied to clipboard:', textToCopy);
                    // Optionally, you can show a success message or perform other actions.
                })
                .catch(err => {
                    console.error('Unable to copy:', err);
                });
        }
    }
};
</script>
  