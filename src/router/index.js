import Vue from 'vue'
import VueRouter from 'vue-router'


import main from '../pages/main/main.vue'
import regist from '../pages/regist/regist.vue'
import classify from '../pages/classify/classify.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes : [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component : main
    },
    {
      path: '/regist',
      component : regist
    },
    {
      path: '/classify',
      component : classify
    }
  ]
})
