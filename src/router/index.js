import Vue from 'vue'
import VueRouter from 'vue-router'


import main from '../pages/main/main.vue'
import regist from '../pages/regist/regist.vue'
import classify from '../pages/classify/classify.vue'
import bigbox from '../pages/classify/bigbox.vue'
import brand from '../pages/classify/brand.vue'

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
      component : classify,
      children:[
        {
          path:'bigbox',
          component : bigbox
        },
        {
          path:'brand',
          component : brand
        }
      ]
    },
  ]
})
