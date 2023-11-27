<template>
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

            <!-- <select id="selectOption" v-model="formData.selectedOption">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select> -->
            
            <!-- <SelectOptions id="selectOption" label="Orgs" v-model="formData.selectedOption">
                <option value="option3">Option 3</option>
            </SelectOptions> -->

            <Radio value="Mr." name="name" v-model="formData.radioGroup" label="Mr" id="mr" />
            <Radio value="Mrs." name="name" v-model="formData.radioGroup" label="Mrs" id="mrs" />
            <Radio value="Ms" name="name" v-model="formData.radioGroup" label="Ms" id="ms" />
            
            <!--
            <input type="radio" v-model="formData.radioGroup" value="group1"> Group 1
            <input type="radio" v-model="formData.radioGroup" value="group2"> Group 2
            <input type="radio" v-model="formData.radioGroup" value="group3"> Group 3
            -->

            <div>
                <label>
                    <input type="checkbox" v-model="formData.checkbox1"> Checkbox 1
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" v-model="formData.checkbox2"> Checkbox 2
                </label>
            </div>
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
                radioGroup: '',
                checkbox1: false,
                checkbox2: false,
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
  