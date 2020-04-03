new Vue({
  el: '#exercise',
  data: {
    effect: false,
    style: '',
    style2: '',
    style3: '',
    attached: false,
    color: '',
    width: 0,
  },
  computed: {
    myStyle: function(){
      return {
        backgroundColor: this.color,
        color: 'white'
      };
    },
    progress: function(){
      return{
        backgroundColor: 'blue',
        width: this.width + '%'
      }
    }
  },
  watch:{
    effect: function(){
      var vm = this;
      setTimeout(function(){
        if (vm.effect === 'highlight'){
          vm.effect = 'shrink';
        } else {
          vm.effect = 'highlight'
        }
      }, 5000);
    },
    attached: function(){
      var vm = this;
      if (vm.attached === 'true'){
        vm.style3 = 'text-color';
      } else {
        vm.style3 = '';
      };
    },
    width: function(){
      var vm = this;
      setTimeout(function(){
        vm.width += 10
      },2000);
    }
  },
  methods: {
    startEffect: function() {
      return this.effect = 'highlight';
    },
    startProgress: function() {
      return this.width += 10;
    }
  }
});
