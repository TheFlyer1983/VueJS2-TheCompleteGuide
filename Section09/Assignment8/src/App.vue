<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="changeTemplate('Blue')">Load Blue Template</button>
                <button class="btn btn-success" @click="changeTemplate('Green')">Load Green Template</button>
                <button class="btn btn-danger" @click="changeTemplate('Red')">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">{{ message }}</component>
                <!-- <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data() {
        return {
          selectedComponent: 'appBlue',
          message: 'This is the Blue template'
        }
      },
      methods: {
        changeTemplate(color){
          this.message = `This is the ${color} template`;
          this.selectedComponent = `app${color}`;
        }
      },
      components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red
      }
    }
</script>

<style>
</style>
