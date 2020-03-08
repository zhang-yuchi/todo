import Vue from 'vue'
import App from './app.vue'
const rooter = document.createElement('div')
import tiger from './assets/img/tiger.jpg'
import './assets/styles/main.css'
import './assets/styles/main.styl'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
document.body.appendChild(rooter)
new Vue({
    render:(h)=>{
        return h(App)
    }
}).$mount(rooter)