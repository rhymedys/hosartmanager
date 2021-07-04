<template>
  <div id="app">
    <ElContainer direction="vertical">
      <ElHeader class="app__header">art-manager</ElHeader>
      <router-view />
    </ElContainer>
  </div>
</template>

<script>
import { ElContainer, ElHeader } from 'element-plus'

export default {
  name: 'App',
  components: {
    ElContainer,
    ElHeader
  }
}
</script>
<style lang="less">
body {
  margin: 0;
  background-color: #f0f2f5;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.app__header {
  text-align: left;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 1;
}

.el-color-picker__panel {
  .el-color-dropdown__link-btn {
    padding: 0px;
  }
}

div::-webkit-scrollbar {
  width: 7px;
  height: 1px;
}

div:hover::-webkit-scrollbar-thumb {
  border-radius: 7px;
  background-color: rgba(203, 200, 198, 0.5);
  /* background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent); */
}
div::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 7px;
  background: transparent;
}
</style>
