  
<template>
    <div class="slideshow">
      <b-container>
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ababab"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=13" img-alt="beach"></b-carousel-slide>        
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=155" img-alt="beachtrain"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=511" img-alt="greencanyon"></b-carousel-slide>
      </b-carousel>
      </b-container>
      
    </div>
</template>

<script>

export default {
      methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
  name: 'Slieshow',
}
</script>

<style scoped>

</style>