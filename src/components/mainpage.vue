<template>
    <div id="main">
    <router-view name="navmenu" class="navmenu"></router-view>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>

<style scoped>
    .aaa{
        border: 1px solid yellow;
    }
    body{
        margin: 0px;
        padding: 0px;
    }
    #main{
        width: 100%;
        height: 100%;

    }


</style>
