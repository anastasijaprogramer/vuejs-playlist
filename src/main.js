import Vue from "vue";
import App from "./App.vue";

//nesting component globally
//import Ninjas from './Ninjas.vue'

//Vue.component('ninjas', Ninjas);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
