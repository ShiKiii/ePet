import Vue from 'vue'
import app from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';
import store from './store'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
