<template>
    <el-menu
            router
            id='menu'
            default-active="/mainpage/home"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
        <el-menu-item index="/mainpage/home">
            <i class="el-icon-house"></i>
            <span slot="title">主  页</span>
        </el-menu-item>
        <el-menu-item index="/mainpage/exam">
            <i class="el-icon-edit"></i>
            <span slot="title">开始考试</span>
        </el-menu-item>
        <el-menu-item index="/mainpage/special">
            <i class="el-icon-edit-outline" ></i>
            <span slot="title">专项练习</span>
        </el-menu-item>
        <el-menu-item index="/mainpage/score">
            <i class="el-icon-document"></i>
            <span slot="title">历史成绩</span>
        </el-menu-item>

        <el-menu-item index="/mainpage/mine">
            <i class="el-icon-user"></i>
            <span slot="title">我的信息</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "navmenu"
    }
</script>

<style scoped>

    #menu{
        width: 15%;
        height: 100%;
        float: left;
    }

</style>