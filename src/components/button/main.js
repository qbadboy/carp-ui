import Vue from 'vue';
import App from './demo';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
