import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import CacheDirective from './vcache.js';

Vue.use(Vuetify)
Vue.directive('cache', CacheDirective);

Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
