<template>
	<div class="selectbox">
		<label v-if="label" :for="id">{{ label }}</label>
		<select 
			:id="id"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">

			<option v-if="!selectedOption" value="">Select an option</option>
			<option v-for="item in jsonDataFile.orgs" 
				:key="item.trust_code" 
				:value="item.trust_name" 
				:id="item.trust_code"
				>

				{{ item.trust_name }}</option>
				<slot></slot>

		</select>

		<!-- <p v-if="selectedOption">{{ selectedOption }}</p> -->

	</div>
</template>

<script>
import jsonDataFile from '~/assets/data/db.json';
export default {
	data() {
		return {
			jsonDataFile,
			selectedOption: '',
			// trustCode: 'ENG'
		}
	},
	props: {
		id: {
			type: String,
			required: false,
			default: 'id-prop-is-required'
		},
		label: {
			type: String,
			required: false
		},
        modelValue: {
            type: String // Assuming modelValue is a string type
        },
    },
    emits: ['update:modelValue']
};
</script>



<style scss scoped>
.selectbox {
	width: 95%;
	label {
		display: block;
		font-size: 1.25rem;
		line-height: 2.0rem;
		margin-bottom: 0.25rem;
	}

	select {
		border: 2px solid var(--first-colour);
		/* border-radius: 0.5rem; */
		padding: 0.5rem;
		width: 100%;
		option:checked {
			background-color: var(--second-colour);
		}
	}

}
</style>
  

  