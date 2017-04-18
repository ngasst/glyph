import Vue from 'vue'
import Router from 'vue-router'
import Custom from '@/components/Custom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Custom',
      component: Custom
    }
  ]
})
