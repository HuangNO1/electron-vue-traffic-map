import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// 引入 baidu map
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'fOYPAeLmUzL5WcnmTxbptW8mKKZqvdkB'
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')