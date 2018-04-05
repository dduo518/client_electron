<template>
  <div id="app">
    <header-content></header-content>
    <contents></contents>
    <footer-content></footer-content>
  </div>
</template>

<script>
  import '../assets/base.css'
  import headerContent from './components/header'
  import footerContent from './components/footer'
  import contents from './components/content'
  export default {
    name: 'project',
    components: {
      headerContent,
      footerContent,
      contents
    },
    mounted () {
      this.$store.dispatch('GET_APP_CACHE').then(data=>{
        this.$store.commit('GET_APP_CACHE',data);
      })
    }
  }
</script>

<style>
  /* CSS */
</style>
