<template>

    <div id="registeredPage_background">


        <router-view class="registeredPage_component"></router-view>

    </div>

</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    #registeredPage_background{
        background-color: #41B883;
        width: 100%;
        height: 100%;
    }


</style>