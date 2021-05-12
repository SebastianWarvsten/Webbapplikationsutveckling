<template>
    <div class="person">
        Name: {{ fName }}<br>
        Age: {{age}}<br>
        Gold: {{gold}}        
    </div>
</template>

<script>

export default {
  name: 'Person',
  props: {
    fName: {
        type: String,
        default: "Lars"
    },
    age: {
        type: Number,
        default: 20
    },
    gold:{
        type: Number,
        default: 10
    }
  }
}
</script>
