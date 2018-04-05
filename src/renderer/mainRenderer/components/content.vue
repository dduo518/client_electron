<template>
			<!-- 中间内容 -->
			<div class="no-drag content">
				<left-content></left-content>	
				<div style="height:100%;width: -webkit-calc(100% - (54px));">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
					<router-view name="right"></router-view>
				</div>
			</div> 
</template>
<script>
import leftContent from './index/left-content'
export default {
  name: 'contents',
  components: {leftContent}
}
</script>

<style>
.content{
	height: -webkit-calc(100% - (97px));
	width:100%;
	background: #ffffff;
	box-sizing: border-box;
	display: flex;
}
</style>