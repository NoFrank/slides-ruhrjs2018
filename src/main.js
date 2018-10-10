import Vue from "vue";
import App from "./App";

import Eagle, { Options } from "eagle.js";
import "eagle.js/dist/eagle.css";
import hljs from "highlight.js";

/* eslint-disable no-new */

Vue.use(Eagle);
Vue.config.productionTip = false;
Options.hljs = hljs;

new Vue({
  el: "#app",
  render: h => h("App"),
  components: { App }
});
