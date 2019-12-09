<template>
    <div id="main">
    <navmenu class="navmenu"></navmenu>
        <keep-alive>
    <router-view ></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import navmenu from "./navmenu";
    export default {
        components: {navmenu},
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
