import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new Router({routes})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
