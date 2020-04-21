<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <div class="exercise">
                  <h2>Exercise 1 - Local Filter</h2>
                  <p>{{ someText }}</p>
                  <p>{{ someText | reverseString }} - filtered</p>
                </div>
                <hr>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <div class="exercise">
                  <h2>Exercise 2 - Global Filter</h2>
                  <p>{{ someText }}</p>
                  <p>{{ someText | countLength }} - filtered</p>
                </div>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <div class="exercise">
                  <h2>Exercise 3 - Computed Poperty Filter</h2>
                  <p>{{ reversed }}</p>
                  <p>{{ calculateLength }}</p>
                </div>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
  import { lengthAwareMixin } from './lengthAwareMixin'
  export default {
    mixins: ['lengthAwareMixin'],
    data(){
      return {
        someText: 'This is the text for Excerise 1!',
        someText3: 'This is the text for Excerise 3!'
      }
    },
    filters: {
      reverseString(value){
        return value.split('').reverse().join('');
      }
    },
    computed: {
      reversed(){
        return this.someText3.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
  .exercise{
    margin-bottom: 10px;
  }
</style>
