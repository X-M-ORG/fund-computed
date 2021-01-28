import Vue from 'vue'

import App from './App'

// styles
import 'normalize.css'
import '@/style/flex.styl'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// jsonp
import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)

// config
Vue.config.productionTip = false

new Vue({ render: (h) => h(App) }).$mount('#app')
