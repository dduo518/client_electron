<template>
  <div class="listbox">
    <right-content></right-content>
	</div>
</template>
<script>
    import rightContent from './right-content'
    export default {
      name: 'contents',
      components: {rightContent},
      data () {
        return {
          title: 'index',
          loading:true
        }
      },
      beforeDestory(){
        this.loading = true;
      }
    }
</script>
<style scoped>
.listbox{
	width: 100%;
	height: 100%;
}
</style>