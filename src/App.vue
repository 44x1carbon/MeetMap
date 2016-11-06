<template>
  <div id="app">
    <my-header></my-header>
    <content></content>
  </div>
</template>

<script>
import content from './components/content.vue'
import myHeader from './components/header.vue'
import { addMember, setCenter } from './vuex/actions.js'
import { tracking, self } from './vuex/getters.js'

export default {
   vuex: {   
    actions: {
      addMember,
      setCenter  
    },
    getters: {
      self
    }
  },
  created() {    
    this.$store.watch(tracking,(val) => { 
      if(val) this.setCenter(this.self.position)
    })
    this.addMember('oBg1Gi6WSyut4qLFAAAA', 'hoge',{
            lat: 51.505,
            lng: -0.09
    })
    this.addMember('zzl4N9HTUXgW4GFZAAAA', 'fuga',{
            lat: 51.506,
            lng: -0.09
    })
    this.addMember('Bqu5vGx_SqpPWITEXAAAB', 'piyo',{
            lat: 51.504,
            lng: -0.09
    })
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
