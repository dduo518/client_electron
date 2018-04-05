<template>
    <div class="right-container">
			<div class="right-box"  v-loading="loading">
					<el-time-select
						v-model="value1"
						:picker-options="{
							start: '08:30',
							step: '00:15',
							end: '18:30'
						}"
						placeholder="选择时间">
					</el-time-select>
			</div>
		</div>
</template>

<script>
    export default {
			 data () {
        return {
					loading:false,
					value1: ''
        }
			},
			// before
    }
</script>

<style scoped>
/*********************
* 内容区布局
*********************/
.content .right-container{
    width: 100%;
    height: 100%;
    padding: 0px;
}

.content .right-container .container-nav{
	float: left;
	width: 100%;
}
.content .container-nav li{
	height: 28px;
	float: left;
	text-align: center;
	padding-bottom: 6px;
	cursor: pointer;
	border-bottom: 4px solid transparent;
}
.content .container-nav li:hover{
	height: 28px;
	border-bottom: 4px solid #a8c4dd;
}
.right-box{
	width: 100%;
	height: 100%;
}
</style>