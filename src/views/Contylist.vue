<template>
    <div class="contylist">
        <h1>All 250 contries in alphabetical order with their flag</h1>
        <b-button @click="decrease" :disabled="buttonInactive">-</b-button>
        <input type="textfield" placeholder="Antal länder som visas" v-model="number">
        <b-button @click="increase">+</b-button>
        <div v-if="cities">
            <div v-for="(city, index) in cities.slice(0, number)" :key="city.alpha3Code">
                {{index+1}} {{city.name}} <img :alt="city.name +' flag'" :src="city.flag" height="30" width="50">
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
            number: Number(3),
            alpha3Code: null,
            buttonInactive: false
        }
    },
    methods: {
        decrease(){
            this.number--
        },
        fetchCountries(){
            axios.get('https://restcountries.eu/rest/v2/')
            .then(response => {
                this.cities = response.data
            })
        },
        increase(){
            this.number++
        }
    },
    name: 'Contrylist',
    watch:{
        number: function(){
            if(this.number <= 0){
                this.buttonInactive = true
            }else{
                this.buttonInactive = false
            }
        }
    }
}
</script>