<template>
    <div  id="test2" style="border: aqua 1px solid">
        <div id="test3">
        <p>请选择考试</p>
    <el-select class="test" v-model="value" placeholder="请选择">
        <el-option
                v-for="item in questionsbanks"
                :key="item.questionsBankID"
                :label="item.questionsBankName"
                :value="item.questionsBankID">
        </el-option>
    </el-select>


        </div>
        <el-button type="primary" round style="float: bottom " @click="dialogVisible = true">开始考试</el-button>


        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="20%"
                :before-close="handleClose">
            <span>确定开始考试？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "ExamComponent",
        
        methods:{
          start_btn:function () {
              this.dialogVisible=false


              
          }  
        },



    data(){



        return{
            questionsbanks:[],
            value:"",
            dialogVisible:false




            //设置默认值为1，即设置第一个单选框为选中状态
        }
    },







        watch:{
            $route (to){
                // eslint-disable-next-line no-console,no-empty
                console.log(to.path)

                if (String(to.path)=="/mainpage/exam"){


                    this.axios.post('/getQuestionName')
                        .then((response)=>{
                            // eslint-disable-next-line no-console

                            // eslint-disable-next-line no-console

                            this.questionsbanks=response.data.questionsbanks

                            // eslint-disable-next-line no-console

                            // eslint-disable-next-line no-console
                            console.log(this.questionsbanks)
                            // eslint-disable-next-line no-conso

                        })
                        .catch(function (error) {
                            // eslint-disable-next-line no-console
                            console.log(error);
                        });




                }
            }
        }


    }

</script>

<style scoped>
    p{

        float: left;
        margin-left: 30%;
        align-content: center;
    }
    .test{

        width: 11%;
        margin-top: 0.5%;
        align-content: center;
        margin-left: 2%;
        float: left;
        display: block;
    }
#test2{
    width: 100%;
    height: 100%;
}
#test3{
    padding: 8%;

    border: #2c3e50 1px solid;
    width: 100%;
    height: 0%;

}
</style>