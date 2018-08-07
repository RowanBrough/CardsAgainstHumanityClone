// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './plugins/router'
import veutify from './plugins/veutify'
import socket from './plugins/socket'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted: function() {
    // check if a user has been created
    var userName = localStorage.getItem('userName');
    if(!userName || userName.length == 0 || userName == 'undefined') {
        // no user has been created send to the user component
      router.push({ path: '/User' });
    }
  }
})
