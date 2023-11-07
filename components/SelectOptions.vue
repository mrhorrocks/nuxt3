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
		label: {
			type: String,
			required: false,
			default: 'Label property is required'
		},
		id: {
			type: String,
			required: false,
			default: 'id-property-is-required'
		},
	},
};
</script>

<template>
	<div class="selectbox">
		<label v-if="label" :for="id">{{ label }}</label>
		<select :id="id" v-model="selectedOption">
			<option v-if="!selectedOption" value="">Select an option</option>
			<option v-for="item in jsonDataFile.orgs" :key="item.trust_code" :value="item.trust_name" :id="item.trust_code">
				{{ item.trust_name }}</option>
		</select>

		<!-- <p v-if="selectedOption">{{ selectedOption }}</p> -->

	</div>
</template>

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
			background-color: red;
		}
	}

}
</style>
  

  