<template>
  <div class="contestants">
    <h1>Propmasters X-treme</h1>
    <b-container v-for="player in playerList" :key="player.name">
      <person :f-name="player.nick" :age="player.age" :gold="player.treasure"/>
    </b-container>
  </div>
</template>

<script>


import Person from '../components/Person.vue';

export default {
  data(){
    return{
      playerList: [
        {
          nick: "Molgan",
          age: 14,
          treasure: 5

        },
        {
          nick: "Torvald",
          age: 55,
          treasure: 800
        },
        {
          nick: "Ferdinand",
          age: 24,
          treasure: 99
        },
        {
          nick: "Sigiesmund",
        },
        {
          nick: "Mortymer",
          treasure: 3
        }
        ]
    }
  },
  components: {
    Person,
  },
  name: "Contestants",
}
</script>
