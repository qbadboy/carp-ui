import Vue from 'vue';
import App from './App';
import carp from '../src';

Vue.use(carp);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
