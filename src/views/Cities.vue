<template>
    <div class="cities">
        <ul v-if="cities">
            <li :key="city.id" v-for="city in cities">
                {{city.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.getCities()
    },
    data(){
        return{
            cities: null
        }
    },
    methods: {
        getCities() {
            fetch('https://avancera.app/cities/')
            .then((response) => response.json())
            .then((result) =>{
                this.cities = result
            })
        }
    },
    name: "Cities"
}
</script>