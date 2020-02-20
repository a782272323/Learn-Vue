<template>
  <div id="app">
    <!-- 路由去哪里的路径,/表示首页 -->
    <router-link to="/">首页</router-link>
    <!-- 路由去内容也Content -->
    <router-link to="/content">内容</router-link>
    <!-- 路由的视图 -->
    <router-view />
  </div>
</template>

<script>
// 导入
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
