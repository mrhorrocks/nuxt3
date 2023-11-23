<template>
    <h2 class="page-heading">Html to JSON</h2>

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
      placeholder="Email" 
      v-model="formData.email" 
      :required="true" />

      <TextField
        type="number"
        id="age" 
        label="Age" 
        placeholder="Age" 
        v-model="formData.age" 
        :required="true" />
        <br>
        <Button class="button submit" text="Submit" />
    </form>
    
    <div v-if="submitted">
        <h2>Submitted Data:</h2>
        <pre>{{ submittedData }}</pre>
    </div>

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