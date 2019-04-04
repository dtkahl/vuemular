import Vue from 'vue';
import Demo from './Demo.vue';
import Vuemular from '../src/vuemular';

Vue.use(Vuemular);

new Vue({
  render: h => h(Demo)
}).$mount('#app');