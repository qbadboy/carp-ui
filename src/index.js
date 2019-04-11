import components from './components';
import { first2Upper } from './utils';

const CARP = {};

components.forEach(component => {
  let name = first2Upper(component.name);
  CARP[name] = component;
});

function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  components.forEach(component => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...CARP
};
