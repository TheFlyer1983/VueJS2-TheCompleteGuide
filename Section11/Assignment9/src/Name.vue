<template>
  <div class="form-group">
    <label for="email">Name:</label>
    <input 
      type="text" 
      id="firstName"
      class="form-control"
      :value="firstName"
      @input="updateName(true, $event)"
      >
    <input 
      type="text" 
      id="lastName"
      class="form-control"
      :value="lastName"
      @input="updateName(false, $event)"
      >
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateName(isFirst, event) {
      let name = '';
      if (isFirst){
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
}
</script>

<style scoped>
  label {
    width: 100%;
  }

  #firstName, #lastName {
    width: 40%;
    display: inline-block;
    margin: 0 5% 0 0;
  }
</style>