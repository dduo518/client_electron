<template>
  <div class="addPage">
    <div class="addpage-head">
			<el-button size='small' plain icon="el-icon-back" @click='goback'>返回</el-button>
    </div>
    <div class="addpage-content" v-loading.lock="addloding">
      <el-row >
        <el-col :span="17" :offset='6'>
          <el-form :inline="true" :model="studentForm"  label-width="100px">
            <el-form-item label="学生姓名">
              <el-input :value="studentForm.name" @input="updateFrom($event,'name')"></el-input>
            </el-form-item>
            <el-form-item label="学生电话">
              <el-input :value="studentForm.phone" @input="updateFrom($event,'phone')"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true"  label-width="100px" >
            <el-form-item label="家长姓名">
              <el-input :value="studentForm.parentname" @input="updateFrom($event,'parentname')"></el-input>
            </el-form-item>
            <el-form-item label="家长电话">
              <el-input :value="studentForm.parentphone" @input="updateFrom($event,'parentphone')"></el-input>
            </el-form-item>
          </el-form>
          <el-form :model="studentForm"  label-width="100px">
            <el-form-item label="家庭住址">
              <el-input :value="studentForm.address" class="address"  @input="updateFrom($event,'address')"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true"  label-width="100px" >
            <el-form-item label="性别">
              <el-radio-group class="radio"  v-model="sex" @change="updateFrom($event,'sex')">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生日期" >
              <el-date-picker
                v-model="birthday"
                type="date"
                placeholder="选择日期" class="datePicker"
                 @input="updateFrom($event,'birthday')">
              </el-date-picker>
              {{this.studentForm.age}}岁
            </el-form-item>
          </el-form>
          <el-form  :inline="true"  label-width="100px">
            <el-form-item label="课程">
              <el-select v-model="subject" placeholder="请选择" class='select'>
                <el-option
                  v-for="item in subjects"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="现有水平">
              <el-input :value="studentForm.level"   @input="updateFrom($event,'level')"></el-input>
            </el-form-item>
          </el-form>
          <el-form  :inline="true"  label-width="100px">
            <el-form-item label="总课时">
              <el-input :value="studentForm.class"   @input="updateFrom($event,'class')"></el-input>
            </el-form-item>
            <el-form-item label="剩余课时">
              <el-input :value="studentForm.remainClass"   @input="updateFrom($event,'remainClass')"></el-input>
            </el-form-item>
          </el-form>
          <el-form  label-width="100px">
            <el-form-item label="上课时间">
              <el-radio-group v-model="subjectTime" size='small'>
                <el-radio-button label="日"></el-radio-button>
                <el-radio-button label="一"></el-radio-button>
                <el-radio-button label="二"></el-radio-button>
                <el-radio-button label="三"></el-radio-button>
                <el-radio-button label="四"></el-radio-button>
                <el-radio-button label="五"></el-radio-button>
                <el-radio-button label="六"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="时间">
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }">
              </el-time-select>
              至
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                  minTime: startTime
                }">
              </el-time-select>
            </el-form-item>
          </el-form>
          <el-form :inline="true"  label-width="100px">
            <el-form-item label="任课教师">
              <el-select v-model="teacher" placeholder="请选择" class='select'>
                <el-option
                  v-for="item in teachers"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课程顾问">
              <el-select v-model="sale" placeholder="请选择" class='select'>
                <el-option
                  v-for="item in sales"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-form   label-width="100px">
            <el-form-item label="跟进状态">
              <el-steps :space="300" :active="active" class="steps" finish-status="success">
                <el-step title="待沟通"></el-step>
                <el-step title="跟进"></el-step>
                <el-step title="试课"></el-step>
                <el-step title="缴费"></el-step>
                <el-step title="排课"></el-step>
                <el-step title="结课"></el-step>
              </el-steps>
              <el-button style="margin-top: 12px;" size='small' plain @click="next">下一步</el-button>
            </el-form-item>
          </el-form>
          <el-form  label-width="100px">
            <el-form-item  label="备注">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                class="textarea"
                :value="studentForm.note"  @input="updateFrom($event,'note')">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button  plain @click="onSubmit">立即创建</el-button>
              <el-button @click='goback'>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible" :modal-append-to-body = 'false' center>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name:'addpage' ,
  data (){
    return {
      week:'日',
      day:'上午',
      startTime: '',
      endTime: '',
      active: 1,
      rules:{

      },
      sex:0,
      birthday:'',
      subjectTime:'',
      dialogTableVisible:false,
      dialogTitle:'',
      startTs:0,
      subject:'',
      teacher:'',
      sale:''
    }
  },
  watch:{
    'birthday':function(newVal,oldVal){
      var age =new Date().getFullYear() - new Date(newVal).getFullYear();
      this.updateFrom(age,'age')
    },
    "subjectTime":function(newVal,oldVal){
      this.updateFrom(newVal,'subjectTime')
    }
  },
  methods:{
    goback (){
      this.$router.push({path:'/student'})
    },
    next(){
      if (this.active++ > 5) this.active = 1;
    },
    onSubmit(){
      this.updateFrom(this.active,'step')
      this.$store.dispatch('SUBMIT_FORM').then(data=>{
        if(data.success){
          this.$store.commit('LODING');
          this.$router.push({path:'/student'})
        }
      });
    },
    focus(ev,type){
      this.dialogTableVisible = true;
      switch(type){
        case 'subject':
          this.dialogTitle = '选择课程';
          break;
          case 'teacher':
          this.dialogTitle = '选择任课老师';
          break;
          case 'sales':
          this.dialogTitle ='选择课程顾问';
          break;
      }
    },
    updateFrom(value,type){
      this.$store.commit('UPDATE_FORM',{type:type,value:value});
    }
  },
  computed:{
    studentForm(){
      this.sex = this.$store.state.student.studentForm.sex;
      this.birthday = this.$store.state.student.studentForm.birthday
      this.subjectTime = this.$store.state.student.studentForm.subjectTime
      return this.$store.state.student.studentForm;
    },
    addloding (){
			return this.$store.state.student.loading;
    },
    subjects (){
      return this.$store.state.app.subjectCache;
    },
    sales (){
      return this.$store.state.app.salesCache;
    },
    teachers (){
      return this.$store.state.app.teacherCache;
    }
  },
  activated(){
    var user_id = this.$route.params.user_id;
    if(user_id!=0){
      this.loding = true;
      this.$store.dispatch('GET_STUDENT',{user_id:user_id});
    }else{
      this.loding = false;
      if((Date.now()-this.startTs)>1000*60*1){
          this.$store.dispatch('CLEAR_CACHE');
      }
    }
  },
  deactivated(){
    this.startTs = Date.now();
    if(this.studentForm.user_id){
      this.$store.dispatch('CLEAR_CACHE');
    }
  },
  beforeUpdate(){
  }
}
</script>
<style>
.addPage{
  position: absolute;
  top: 0;
  width:100%;
  height:100%;
  background: #f7f7f7;
  z-index: 10;
  padding: 10px 20px;
  right: 0;
}
.addPage>div{
  width:100%;
}
.addpage-head{
  height: 40px;
}
.addpage-content{
  height: -webkit-calc(100% - (50px));
}
.datePicker.el-input,
.radio{
  width:202px;
}
.address{
  width:518px;
}
.textarea{
  width: 518px;
}
.steps .el-step.is-horizontal .el-step__line{
  top:18px;
}
div.steps {
  width:600px;
}
.select{
  width:202px;
}
.addpage-content .el-loading-mask{
  background-color: #f7f7f7;
}
</style>


