<template>
    <div class="contylist">
        <h1>All contries in alphabetical order</h1>
        <input type="textfield" placeholder="Antal länder som visas" v-model="number">
        <div v-if="cities != null">
            <div v-for="(city, index) in cities.slice(0, number)" :key="city.alpha3Code">
                {{index+1}} {{city.name}} <img alt="country flag" :src="city.flag" height="30" width="50">
            </div>
        </div>
        <div v-else>
            Ange antal länder
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    created(){
        this.fetchCountries()
    },
    data(){
        return{
            cities: null,
            number: Number(11),
            alpha3Code: null
        }
    },
    el: '#app',
    methods: {
        fetchCountries(){
            axios.get('https://restcountries.eu/rest/v2/')
            .then(response => {
                this.cities = response.data
                console.log(this.cities)
            })
        },
    },
    name: 'Contrylist'
}
</script>