import Vue from 'vue'
import App from './App.vue'

// import Login from './Login.vue'

App.install = function(Vue){
  Vue.component(App.name, App)
}

export default App;

new Vue({
  el: '#app',
  render: h => h(App)
})
