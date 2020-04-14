<template>
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <app-server
          v-for="server in servers"
          :server="server"  
        ></app-server>
            <!-- <li
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li> -->
      </ul>
    </div>
</template>

<script>
  import AppServer from './AppServer.vue';

  export default {
    data() {
      return {
        servers: [
          { id: 1, status: 'Normal' },
          { id: 2, status: 'Critical' },
          { id: 3, status: 'Unknown' },
          { id: 4, status: 'Normal' },
          { id: 5, status: 'Critical' }
        ]
      }
    },
    components: {
      'app-server': AppServer
    }
  }
</script>

<style>

</style>
