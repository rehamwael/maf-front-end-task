import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/tailwind.css';
import './assets/styles/swiper.min.css';
import './assets/styles/styles.css';

Vue.use(VueAwesomeSwiper, {

});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
