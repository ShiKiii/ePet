import Vue from 'vue'
import app from './App.vue'
import router from './router'
import { Swipe, SwipeItem ,IndexList, IndexSection} from 'mint-ui';
import store from './store'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);


new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
