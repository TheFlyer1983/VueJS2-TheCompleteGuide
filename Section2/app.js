new Vue({
  el: '#exercise',
  data: {
      value: ''
  },
  methods: {
    alertMe: function(){
      alert(`I've been clicked!`);
    },
    updateValue: function(event){
      this.value = event.target.value;
    }
  }
});