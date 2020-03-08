import Vue from 'vue'
import App from './app.vue'
const rooter = document.createElement('div')
import tiger from './assets/img/tiger.jpg'
import './assets/styles/main.css'
import './assets/styles/main.styl'
document.body.appendChild(rooter)
new Vue({
    render:(h)=>{
        return h(App)
    }
}).$mount(rooter)