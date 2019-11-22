<template>

<div id="registereda">

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="登录"  name="first"  @tab-click=to_registered>
                <el-input v-model="username" placeholder="请输入内容" style="margin-top: 20px"></el-input>
                <el-input placeholder="请输入密码" v-model="password" show-password style="margin-top: 30px"></el-input>
                <el-button class="bt_register" type="primary" round style="margin-top: 30px" @click="loginSystem">登录</el-button>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second" @tab-click=to_register>
                <el-input v-model="username" placeholder="请输入账号" style="margin-top: 20px"></el-input>
                <el-input placeholder="请输入密码" v-model="password" show-password style="margin-top: 30px"></el-input>
                <el-input placeholder="请再次输入密码" v-model="password" show-password style="margin-top: 30px"></el-input>
                <el-button class="bt_register" type="primary" round style="margin-top: 30px">注册</el-button>
            </el-tab-pane>
        </el-tabs>








</div>

    
</template>

<script>
    import router from "@/luyou";

    export default {
        name: "registered",
        methods:{
            loginSystem:function () {
                this.$axios.post('http://127.0.0.1:5000/def', {
                    firstName: '1757792304',
                    lastName: '1757792304hq'
                })
                    .then(function (response) {
                        // eslint-disable-next-line no-console
                        console.log(response);
                    })
                    .catch(function (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    });
                router.push({ path: 'homepage' })

            }

        }
        
        ,
        props:{

            
        },

        data(){
            
            return{
                activeName:'first',
                username:"",
                password:""
                //设置默认值为1，即设置第一个单选框为选中状态
            }
        }



    }
</script>

<style scoped>
    #registereda{

        padding: 20px;
        background-color: #ffffff;

        margin: 0 auto;
        margin-top: 30px;
        width: 300px;
        height: 400px;
    }
    .bt_register{
        width: 260px;
    }

</style>