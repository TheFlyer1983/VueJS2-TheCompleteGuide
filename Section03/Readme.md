# New things from this section

## Directives
### Conditionals
- v-if - allows us to bind it to a condition or a property that resolves to true or false.
- v-else - automatically releates to the v-if in front of it.
- v-else-if - only from Vue.JS 2.1+, must immediately follow a v-if, can have multiple v-else-if.
- v-show - to hide it from the DOM with a {display: none} css property.

### Lists
- v-for - allows us to loop through an array and replicate the element on which is sits as often as needed, and pull out content from the array for the current iteration.
  - v-for also has a second optional parameter which is the index of the element in the array.
  - When looping through objects there are 3 parameters (value, key, index) - This is order specific.