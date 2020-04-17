<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <h1>Signup</h1>
          <hr>
          <!-- <div class="form-group">
            <label for="email">Name:</label>
            <input 
              type="text" 
              id="firstName"
              class="form-control"
              v-model="userData.firstName"
              placeholder="First Name">
            <input 
              type="text" 
              id="lastName"
              class="form-control"
              v-model="userData.lastName"
              placeholder="Last Name">
          </div> -->
          <app-name v-model="userData.fullName"></app-name>
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="text" 
              id="id"
              class="form-control"
              v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password"   
              id="password" 
              class="form-control"
              v-model="userData.password">
          </div>
          <div class="form-group">
            <label for="yes">
              <input
                type="radio"
                id="yes"
                value="Yes"
                v-model="database"> Yes
            </label>
            <label for="no">
              <input
                type="radio"
                id="no"
                value="No"
                v-model="database"> No
            </label>
          </div>
        </div>
        <hr>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName}}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ database }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Name from "./Name.vue";
  export default {
    data() {
      return {
        userData: {
          // firstName: '',
          // lastName: '',
          fullName: 'Paul Livingstone',
          email: '',
          password: ''
        },
        database: '',
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.isSubmitted = true;
      }
    },
    components: {
      appName: Name
    }
  }
</script>

<style scoped>
  label {
    width: 100%;
  }

  #firstName, #lastName {
    width: 40%;
    display: inline-block;
    margin: 0 5% 0 0;
  }
</style>
