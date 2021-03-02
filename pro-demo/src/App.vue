<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Table</router-link> |
      <router-link to="/grid">Grid</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.demo-view {
  width: 100%;
  max-width: 1800px;
  min-width: 1200px;
  margin: 0 auto;
}
.demo-pre {
  background: #333;
  color: white;
}
</style>
