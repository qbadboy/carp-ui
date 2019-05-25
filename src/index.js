import components from './components';
const CARP = {};

export function first2Upper(str) {
  const namespace = 'carp-';
  str = str.split(namespace);

  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

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
