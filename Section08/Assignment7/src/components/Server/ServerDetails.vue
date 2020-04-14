<!-- <template>
    <div class="col-xs-12 col-sm-6">
        <p>The server status of server {{ id }} is: {{status}}</p>
    </div>

</template>-->

<!-- Instructors Solution -->
<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>
</template>

<!-- My Solution -->
<!-- <script>
  import { eventBus } from "../../main";
  export default{
    props: {
      status: {
        type: String
      },
      id: {
        type: Number
      }
    },
    created(){
      eventBus.$on('serverDetails', (status,) => {
        this.status = status;
      });
    }
  }
</script> -->

<!-- Instructors Solution -->
<script>
  import { serverBus } from "../../main";
  export default{
    data(){
      return {
        server: null
      }
    },
    methods: {
      resetStatus() {
        this.server.status = 'Normal'
      }
    },
    created(){
      serverBus.$on('serverSelected', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>

</style>
