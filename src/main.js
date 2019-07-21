//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'


import mockdata from './mock'
//按需导入mint-ui
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
//使用懒加载组件需要全局导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//导入图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import 'bootstrap/dist/css/bootstrap.css'

//导入格式化时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', function(dataStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern);
})

Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Vuex)

//导入app.vue组件
import app from './App.vue'
import router from './router.js'
import store from './store.js'

//设置请求根路径
Vue.http.options.root = 'http://www.escook.cn:3000'
// Vue.http.options.emulateJSON = true;

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})