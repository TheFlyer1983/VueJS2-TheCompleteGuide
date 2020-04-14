import Vue from 'vue'
import App from './App.vue'

// My Solution
/* export const eventBus = new Vue({
  methods: {
    serverStatus(status){
      this.$emit('serverDetails', status);
    }
  } 
}); */

// Instructor Solution
export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
