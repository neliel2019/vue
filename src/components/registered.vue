<template>

<div id="registereda">

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="登录"  name="first" >
                <el-input v-model="l_username" placeholder="请输入内容" style="margin-top: 20px"></el-input>
                <el-input placeholder="请输入密码" v-model="l_password" show-password style="margin-top: 30px"></el-input>
                <el-button class="bt_login" type="primary" round style="margin-top: 30px" @click="loginSystem">登录</el-button>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
                <el-input v-model="r_username" placeholder="请输入账号" style="margin-top: 20px"></el-input>
                <el-input placeholder="请输入密码" v-model="r_password" show-password style="margin-top: 30px"></el-input>
                <el-input placeholder="请再次输入密码" v-model="re_password" show-password style="margin-top: 30px"></el-input>
                <el-button class="bt_register" type="primary" round style="margin-top: 30px" @click="userRegister">注册</el-button>
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
                this.$axios.post('/login',{
                    'username': this.l_username,
                    'password': this.l_password
                })
                    .then((response)=> {




                        if (1===response.data.login_check_code){

                            this.$message({
                                showClose: true,
                                message: '登录成功',
                                type: 'success'

                            });



                            router.push({ path: 'homepage' })


                            // eslint-disable-next-line no-empty
                        }else {

                            this.$message({
                                showClose: true,
                                message: '登录失败，请确认账号密码是否正确',
                                type: 'error'
                            });
                            // eslint-disable-next-line no-undef

                        }
                    })
                    .catch(function (error) {
                        // handle error
                        // eslint-disable-next-line no-console
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });


            },


            userRegister:function () {
                if (this.r_password===this.re_password){

                    this.axios.post('/register', {
                        "r_username": this.r_username,
                        "r_password": this.r_password
                    })
                        .then((response)=> {
                            // eslint-disable-next-line no-console
                            if (response.data.register_code===1){
                                // eslint-disable-next-line no-console
                                this.$message({
                                    showClose: true,
                                    message: '注册成功，请登录',
                                    type: 'success'

                                });
                                this.activeName="first"


                                // eslint-disable-next-line no-empty
                            }else {
                                this.$message({
                                    showClose: true,
                                    message: "该用户名已被占用",
                                    type: 'error'

                                });


                            }
                        })
                        .catch(function (error) {
                            // eslint-disable-next-line no-console
                            console.log(error);
                        });

                    // eslint-disable-next-line no-empty
                }else {}


            }

            },

        data(){



            return{
                activeName:'first',
                l_username:"",
                l_password:"",
                r_username:"",
                r_password:"",
                re_password:""




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