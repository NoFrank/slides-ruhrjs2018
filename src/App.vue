<template>
  <div id="app">
    <hdawvjs></hdawvjs>
  </div>
</template>

<script>
import HighlyDynamicAppsWithVueJS from "./ruhrjs/HighlyDynamicAppsWithVueJS";

export default {
  name: "app",
  components: {
    hdawvjs: HighlyDynamicAppsWithVueJS
  }
};
</script>

<style lang="scss">
body {
  width: 100%;
  margin: 0 0;
}
html {
  height: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
</style>
