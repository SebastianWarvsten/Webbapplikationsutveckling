<template>
  <div class="about">
    <h1>Why I do this</h1>
    <h2>Criterias:</h2>
    <div v-for="criteria in criterias" :key="criteria.name">
      <label>
        {{criteria.name}}
      <input type="checkbox">
    </label>
    </div>
  </div>
</template>

<script>
import criteria from '../assets/criteria.json'

export default {

    data(){
        return{
            criterias: criteria
        }
    },
    methods: {

    },
   name: 'About'
}
</script>