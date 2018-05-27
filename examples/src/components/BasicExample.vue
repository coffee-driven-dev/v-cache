<template>
	<v-form v-model="form.valid">
		<v-text-field
			v-model="form.name"
			:counter="10"
			label="Name"
			required
		></v-text-field>
		<v-text-field
			v-model="form.email"
			label="E-mail"
			required
		></v-text-field>
		<v-text-field
			v-model="form.message"
			label="Message"
			multi-line
		></v-text-field>
		<v-checkbox
			label="Do you agree to the terms and conditions?"
			v-model="form.termsAccepted"
		></v-checkbox>

		<v-btn block color="info" @click="pretendSubmitForm">Submit Message</v-btn>
	</v-form>
</template>

<script>
export default {
  name: 'BasicExample',
  data() {
	  return {
		  form: {
			  valid: false,
			  name: '',
			  email: '',
			  message: '',
			  termsAccepted: false
		  }
	  }
  },
  watch: {
	// Watch for changes to all of form's properties
	// and trigger caching behavior
    form: {
      handler: function() {
        this.$emit("cache", this.form);
      },
      deep: true
    }
  },
  mounted() {
	// After this form is rendered, restore its form values
	// if it has any cached form values
    this.$emit("restore-cache");
  },
  methods: {
    pretendSubmitForm() {
      this.form = {
        username: "",
        email: "",
        message: "",
        termsAccepted: false
	  };
	  
	  // Clear any cached values for this form
      this.$emit("clear-cache");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
