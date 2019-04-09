import Vue from 'vue';
import App from './App';
import carp from '../lib/carp_ui.es.js';

Vue.use(carp);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
