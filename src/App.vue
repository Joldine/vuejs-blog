<template>
  <div id="app">
    <el-container>
      <el-header>
        <span class="header-title">Joldnine's Blog</span>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-container {
  min-width: 18em;
  margin: auto;
  max-width: 60em;
}
.el-header {
  color: #333;
  line-height: 60px;
}
.header-title {
  font-size: 1.5em;
}
.el-main {
}
code {
  color: #F56C6C;
}
</style>
