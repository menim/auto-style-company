import Vue from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';

import '@/assets/style/style.css';

Vue.config.productionTip = false;

Vue.use (VueScrollTo, {
  duration: 800,
  easing: 'ease-in',
});

new Vue ({
  render: h => h (App),
}).$mount ('#app');
