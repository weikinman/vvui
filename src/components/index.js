/* Automatically generated by './build/bin/build-entry.js' */

import vInput from '../components/vInput/index.vue';


const components = [
    vInput
];

const install = function(Vue, opts = {}) {
 
  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.13.0',
  install,
  vInput
};