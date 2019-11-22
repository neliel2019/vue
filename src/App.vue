<template>
  <div id="app">
    <router-view class="mainRouterView"></router-view>

  </div>
</template>

<script>





import router from "@/luyou";

export default {

  name: 'app',
  components: {


  }
  ,router


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;


  border: 1px solid red;
}
  .mainRouterView{
    border: 1px  green solid;
  }

</style>
