<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <h3>Change images through mutation</h3>
    <img :src="picture"><br>
    Picture #: {{$store.state.index+1}}<br>
    
    <button @click="$store.commit('changeIndex')">Byt Bild</button>
    <h3>Criterias fetched from local json-fil:</h3>
        <div v-for="criteria in criterias" :key="criteria.name">
      <label>
        {{criteria.name}}
      <input type="checkbox" checked>
      </label>
    </div>
    
</div>
</template>

<script>
import criteria from '../assets/criteria.json'

export default {
  computed:{
    picture(){
      return this.$store.state.pictures[this.$store.state.index]
    }
  },
  data(){
    return{
      criterias: criteria
    }
  },
  methods:{

  },
  name: 'Homepage',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
