import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  //rendiranje App varijable iz importa, na div element #app u index.html-u
  render: h => h(App)
})
