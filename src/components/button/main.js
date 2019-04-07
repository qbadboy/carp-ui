import Vue from 'vue';
import App from './demo';

Vue.config.productionTip = false;
Vue.prototype.__NAMESPACE__ = 'carp-';

new Vue({
  render: h => h(App)
}).$mount('#app');
