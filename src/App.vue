<template>
  <div id="app">
    <div v-if="$online"> 
      <p style="background:green; color:white">You are currently online!</p>
    </div>
    <div v-else>
      <p style="background:red; color:white">You are offline</p>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contestants">Contestants</router-link> |
      <router-link to="/contylist">Contrylist</router-link> |
      <router-link to="/slideshow">Slieshow</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
