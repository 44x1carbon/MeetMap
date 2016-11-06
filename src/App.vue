<template>
  <div id="app">
    <my-header></my-header>
    <content></content>
  </div>
</template>

<script>
import content from './components/content.vue'
import myHeader from './components/header.vue'


export default {
  data () {
    return {
      markers: [
        {
          position: {
            lat: 51.505,
            lng: -0.09
          },
          icon: {
            iconUrl: 'https://pbs.twimg.com/profile_images/581025665727655936/9CnwZZ6j.jpg'
          }
        }
      ],
      center: {
            lat: 51.505,
            lng: -0.09
      }
    }
  },
  components: {
    content,
    myHeader
  }
}
</script>

<style>
body {
  margin: 0;
  width : 100vw;
  height : 100vh;
  color:  #14171A;
}
#app {
  width : 100%;
  height : 100%;
}
</style>
