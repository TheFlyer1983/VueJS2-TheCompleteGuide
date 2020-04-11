<template>
  <div class="row">
    <server-list></server-list>
    <server-details></server-details>
  </div>
</template>

<script>
  import ServerDetails from './ServerDetails.vue';
  import ServerList from './ServerList.vue';
  export default {
    components: {
      'server-details': ServerDetails,
      'server-list': ServerList
    }
  }
</script>

