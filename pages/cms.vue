<template>
    <Head>
        <Title>CMS - Mr.Horrocks</Title>
        <Meta name="description" content='Convert user input to JSON' />
    </Head>

    <h2 class="page-heading">CMS</h2>

    <section aria-label="CMS">
        <form @submit.prevent="submitForm" autocomplete="on">

        <TextField
            type="text"
            id="page-title" 
            label="Page Title" 
            placeholder="Add a title" 
            v-model="formData.pagetitle" 
            :required="true" />

        <TextField 
            type="text"
            id="sub-heading" 
            label="Sub Heading" 
            placeholder="Sub-heading"
            v-model="formData.subheading"
            :required="true" />

        <TextArea  
            id="main-copy"
            label="Main Copy" 
            placeholder="Write your stuff here..." 
            v-model="formData.maincopy"
            :required="true" />

            <br>
            <Button class="button submit" text="Submit" />
        </form>
        
        <div v-if="submitted">
            <h3 class="section-title mt-10 mb-0">Results:</h3>
            <!-- Copy to clipboard button -->
            <CopyToClipboard>
                <!-- Display the JSON -->
                <pre>{{ submittedData }}</pre>
            </CopyToClipboard>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                pagetitle: '',
                subheading: '',
                maincopy: '',
            },
            submitted: false,
            submittedData: null,
        };
    },
    methods: {
        submitForm() {
            // Collect form data
            this.submittedData = JSON.stringify(this.formData, null, 2);
            this.submitted = true;
        },
    },
};
</script>