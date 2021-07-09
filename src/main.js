import Vue from 'vue'
import './styles/index.scss'
import App from './App.vue'
//在main.js 引入SVG
import './assests/icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')