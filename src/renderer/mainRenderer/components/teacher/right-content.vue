<template>
  <div class="t-right-container">
			<header class="s-m-header">
			<el-row type="flex" class="row-bg" justify="space-between">
				<el-col :span="12">
					<div class="grid-content bg-purple">
						<el-button type="primary"  size="small" icon="el-icon-plus" @click='addTeacher'>增加教师</el-button>
						<el-button type="primary"  size="small" icon="el-icon-printer">导出教师</el-button>
						<el-button type="primary"  size="small" icon="el-icon-printer">导入教师</el-button>
					</div>
				</el-col>
				<el-col :span="6">
					<el-input
						placeholder="请输入内容"
						v-model="inputSearch"
                        size='small'
						clearable>
					    <i slot="prefix" class="el-input__icon el-icon-search"></i>
					</el-input>
				</el-col>
			</el-row>
		</header>
        <main class="s-m-main" v-loading="loading">
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
					label="性别"
				></el-table-column>
				<el-table-column
					fixed
					prop="teacher.value"
					label="联系方式"
				></el-table-column>
				<el-table-column
					fixed
					prop="parent"
					label="资历"
				></el-table-column>
				<el-table-column
					fixed
					label="入职日期"
				>
				</el-table-column>
				<el-table-column
					fixed
					prop="note"
					label="状态"
				></el-table-column>
				<el-table-column
					fixed
					prop="note"
					label="课程"
				></el-table-column>
				<el-table-column
					fixed
					label="操作"
				>
				  <template slot-scope="scope">
						<el-button @click="edite(scope.row)" type="text" size="small">修改</el-button>
						<el-button @click="detail(scope.row)" type="text" size="small">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</main>
		<footer class="s-m-footer">
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
	</div>
</template>
<script>
    export default {
			  data(){
            return{
                inputSearch:'',
                loading:false,
                lists:{
                    data:[],
                    paging:{
                       page:1,
                       limit:10,
                       total:50
                    }
                }
            }
        },
        methods:{
            addTeacher(){
                
            },
            handleSizeChange(){

            },
            handleCurrentChange(){

            }
        }
    }
</script>

<style scoped>
/*********************
* 内容区布局
*********************/
.content .t-right-container{
    width: 100%;
    height: 100%;
		padding: 20px;
}
.t-right-container  .s-m-header{
    margin-bottom: 20px;
}
.t-right-container  .s-m-main{
    height: -webkit-calc(100% - (106px));
}
.t-right-container  .s-m-footer{
    padding-top: 20px;
    line-height: 50px;
}
</style>