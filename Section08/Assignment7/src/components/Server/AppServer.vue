<!-- My solution -->
<!--<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="server in servers">
      <p>Server #{{ server.id }}</p>
      <button @click="showStatus(server.id-1)">Server Details</button>
    </li>
  </ul>
</template>-->

<!-- Instructors Solution -->
<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="serverSelected">
    <p>Server #{{ server.id }}</p>
  </li>
</template>

<!-- My Solution -->
<!--<script>
  import { eventBus } from "../../main";
  export default {
    props: {
      servers: {
        type: Array
      }
    },
    methods: {
      showStatus(id){
        // const index = id - 1
        eventBus.serverStatus(this.servers[id].status);
      }
    }
  }
</script>-->

<!-- Instructors Solution -->
<script>
  // import { eventBus } from "../../main";
  import { serverBus } from "../../main";
  export default {
    props: ['server'],
    methods: {
      serverSelected() {
        serverBus.$emit('serverSelected', this.server);
      }
    }
  }
</script>