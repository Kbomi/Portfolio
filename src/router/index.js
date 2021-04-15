import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/main/MainComponent'
import BrandiComponent from '@/components/brandi/main/MainComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainComponent
    },
    {
      path: '/brandi',
      name: 'Brandi',
      component: BrandiComponent
    }
  ]
})
