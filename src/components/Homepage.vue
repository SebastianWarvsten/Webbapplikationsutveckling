<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <input data-provide="sliter">
    <h3>Idé 1 :</h3>
    Gör så att loggan är olika bilder som åker runt i en bootstrap carousel.
    <br>
    När man klickar på en bild så ska temat ändras, ex klickar man på en The Settlers 3 bild så ska temat bli stone/marble
    <h3>Saker kvar att använda:</h3>

</div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
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
.carousel-item{
  height: 200;
  width: 300;
}
</style>
