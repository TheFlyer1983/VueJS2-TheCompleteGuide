<template>
  <p>Counter is: {{ doubleCounter }}</p>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '../store/types';
  export default {
    computed: {
      ...mapGetters({
        doubleCounter: types.DOUBLE_COUNTER,
        stringCounter: types.CLICK_COUNTER
      })
    }
  }
</script>