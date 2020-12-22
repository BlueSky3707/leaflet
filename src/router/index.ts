import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

import Map  from '@/components/Map.vue'
// ... 其他组件
Vue.use(Router)
const routes: RouteConfig[] = [
  {
    path: '/',
    component:Map
  }
  // ...其他 routers
]
export default new Router({
  routes
})