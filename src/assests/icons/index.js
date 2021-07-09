//src/icons/index.js
import Vue from 'vue'
//引入svg组件
import SvgIcon from '@/components/SvgIcon'

//全局注册Icon-svg
Vue.component('svg-icon', SvgIcon)

// icons图标自动加载
const req = require.context('./svgs', true, /\.svg$/ )
req.keys().map(req)
