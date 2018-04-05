<template >
  <div class="listbox">
			<header>
				<el-row type="flex" class="row-bg" justify="space-between">
					<el-col :span="6">
						<div class="grid-content bg-purple">
							<el-button type="primary"  size="small" icon="el-icon-plus" @click='addStudent'>增加学生</el-button>
							<el-button type="primary"  size="small" icon="el-icon-printer">导出学生</el-button>
						</div>
					</el-col>
					<el-col :span="6">
						<el-input
							placeholder="请输入内容"
							v-model="inputSearch"
							size="small"
							clearable>
							<i slot="prefix" class="el-input__icon el-icon-search"></i>
						</el-input>
					</el-col>
				</el-row>
			</header>
			<main class="main" v-loading="loading">
					<el-table
						stripe
						:data="lists.data"
						border
					>
						<el-table-column
							fixed
							prop="name"
							label="姓名"
						></el-table-column>
						<el-table-column
							fixed
							prop="subject.value"
							label="课程"
						></el-table-column>
						<el-table-column
							fixed
							prop="teacher.value"
							label="老师"
						></el-table-column>
						<el-table-column
							fixed
							prop="parent"
							label="家长"
						></el-table-column>
						<el-table-column
							fixed
							label="剩余 | 总课时"
						>
						<template slot-scope="scope">
								<span  v-bind:class="{ active: scope.row.remainClass<5}">{{scope.row.remainClass}}  </span>| <span>{{scope.row.class}}</span>
						</template>
						</el-table-column>
						<el-table-column
							fixed
							prop="note"
							label="备注"
						></el-table-column>
						<el-table-column
							fixed
							label="操作"
						>
						<template slot-scope="scope">
							<el-button @click="edite(scope.row)" type="text" size="small">编辑</el-button>
							<el-button @click="detail(scope.row)" type="text" size="small">查看</el-button>
						</template>
						</el-table-column>
					</el-table>
			</main>
			<footer>
				<div class="block">
					<el-pagination
					  @size-change="handleSizeChange"
     			  @current-change="handleCurrentChange"
						background
						:current-page="lists.paging.page"
						:page-sizes="[10, 20, 30, 40]"
						:page-size="lists.paging.limit"
						layout="total, sizes, prev, pager, next, jumper"
						:total="lists.paging.total">
					</el-pagination>
				</div>
			</footer>
			<transition  name="slide-fade">
				<keep-alive>
					<router-view name='addPage' ></router-view>
				</keep-alive>
			</transition>
	</div>
</template>
<script>
    export default {
      data () {
        return {
					title: 'student',
					inputSearch:''
        }
			},
			mounted () {
				this.$store.dispatch('GET_STUENT_LISTS');
			},
			methods:{
				// 改变每页数量
				handleSizeChange (index){
					this.$store.dispatch('CHANGE_SIZE',{limit:index});
				},
				// 当前页码改变
				handleCurrentChange (index){
					this.$store.dispatch('CHANGE_SIZE',{page:index});
				},
				addStudent (){
					this.$router.push({ name:'addStudent',params:{user_id:0}})
				},
				edite(val){
					this.$router.push({name:'addStudent',params:{user_id:val.user_id}});
				},
				detail(val){
					console.log(val)
				}
			},
			computed:{
				lists (){
					return this.$store.state.student.lists;
				},
				loading (){
					return this.$store.state.student.loding;
				}
			}
    }
</script>
<style scoped>
.listbox{
	width:100%;
	height:100%;
	padding:20px;
	position: relative;
}
header{
	padding-bottom: 10px;
}
main{
	height: -webkit-calc(100% - (84px));
	overflow-y:auto ;
}
footer{
	height: 50px;
	padding-top: 10px;
}
.active{
	color: red;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateX(1000px);
  opacity: 1;
}
.slide-fade-leave-to{
	transform: translateX(2000px);
}
</style>