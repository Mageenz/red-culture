<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  overflow: hidden;
  font-size: 12px;
  color: #333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  color: #409eff;
  text-decoration: none;
}

.searchbar {
  margin-bottom: 30px;
}

.pagination {
  margin-top: 15px; text-align: center
}

.flex{
  display: flex;
}
.flex-1 {
  flex: 1;
}
.aic {
  align-items: center;
}
</style>
