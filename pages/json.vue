<template>
    <Head>
        <Title>User input to JSON - Mr.Horrocks</Title>
        <Meta name="description" content='Convert user input to JSON' />
    </Head>

    <h2 class="page-heading">User input to JSON</h2>

    <p>This form converts user input to a JSON object</p>

    <section aria-label="Custom Made Components">
        <form @submit.prevent="submitForm" autocomplete="on">

        <TextField
            id="name" 
            label="Name" 
            placeholder="Add name" 
            v-model="formData.name" 
            :required="true" />

        <TextField 
            type="email"
            id="email" 
            label="Email" 
            placeholder="Enter a valid email address" 
            v-model="formData.email" 
            :required="true" />

        <TextField
            type="number"
            id="age" 
            label="Age" 
            placeholder="Enter a number" 
            v-model="formData.age" 
            :required="true" />

            <br>
            <Button class="button submit" text="Submit" />
        </form>
        
        <div v-if="submitted">
            <h3 class="section-title my-4">Results:</h3>
            <pre>{{ submittedData }}</pre>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                age: null,
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