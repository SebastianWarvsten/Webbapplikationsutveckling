<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <h3>Idé 1 :</h3>
    Gör så att loggan är olika bilder som åker runt i en bootstrap carousel.
    <br>
    När man klickar på en bild så ska temat ändras, ex klickar man på en The Settlers 3 bild så ska temat bli stone/marble
    <h3>Saker kvar att använda:</h3>
Minst en komponent tar emot, och använder, minst en prop (via props-nyckeln)<br>
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
  name: 'Homepage',
  props: {
    msg: String,
  }
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
