import Vue from 'vue';
import App from './demo';
import carp from '../src/index';

Vue.use(carp);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');