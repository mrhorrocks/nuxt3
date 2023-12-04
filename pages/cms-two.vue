<template>
    <Head>
        <Title>CMS2 - Mr.Horrocks</Title>
        <Meta name="description" content='Convert to JSON' />
    </Head>
    <div class="mt-20">
        <form @submit.prevent="handleSubmit">
            <TextField
            type="text"
            id="page-title" 
            label="Page Title" 
            placeholder="Add a title" 
            v-model="formData.pagetitle" 
            />

            <TextField 
            type="text"
            id="sub-heading" 
            label="Sub Heading" 
            placeholder="Sub-heading"
            v-model="formData.subheading"
            />

            <TextArea  
            id="main-copy"
            label="Main Copy" 
            placeholder="Write your stuff here..." 
            v-model="formData.maincopy"
            />

            <br>
            <Radio value="Mr." name="name" v-model="formData.radioGroup" label="Mr" id="mr" />
            <Radio value="Mrs." name="name" v-model="formData.radioGroup" label="Mrs" id="mrs" />
            <Radio value="Ms" name="name" v-model="formData.radioGroup" label="Ms" id="ms" />
            
            <br>

            <label class="checkbox">
                <input type="checkbox" v-model="formData.checkbox1" name="checkbox1" />
                <span class="checkmark"></span>
                <span class="checkboxLabel">C1</span>
            </label>         

            <label class="checkbox">
                <input type="checkbox" v-model="formData.checkbox2" name="checkbox2" />
                <span class="checkmark"></span>
                <span class="checkboxLabel">C2</span>
            </label>
            
            <br>

            <TextField
            type="number"
            id="age" 
            label="Age" 
            placeholder="Enter a number" 
            v-model="formData.age" 
            />
        
            <br>

            <SelectOptions id="selectOption" v-model="formData.selectedOption" />
        
            <br>

            <Button class="button submit" type="submit" text="Submit" />
        </form>

        <pre v-if="submitted">{{ submittedData }}</pre>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                pagetitle: '',
                subheading: '',
                maincopy: '',
                selectedOption: '',
                age: '',
                radioGroup: '',
                checkbox1: '',
                checkbox2: '',
            },
            submitted: false,
            submittedData: null,
        };
    },
    methods: {
        handleSubmit() {
            this.submittedData = JSON.stringify(this.formData, null, 2);
            this.submitted = true;
        },
    },
};
</script>
  
<style>
/* Add your styles here if needed */
</style>
  