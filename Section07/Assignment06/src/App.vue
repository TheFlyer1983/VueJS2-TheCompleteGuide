<template>
    <div class="container">
      <heading></heading>  
      <hr>
      <servers></servers>
      <hr>
      <my-footer></my-footer>
    </div>
</template>

<script>
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";
  import Servers from "./Servers.vue";
  export default {
    components: {
      'heading': Header,
      'my-footer': Footer,
      'servers': Servers
    }
  }
</script>

<style>

</style>
