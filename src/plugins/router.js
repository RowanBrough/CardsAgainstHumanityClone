import Vue from 'vue'
import Router from 'vue-router'
import Lobby from '@/components/Lobby'
import Host from '@/components/Host'
import Join from '@/components/Join'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: ['/Lobby','/Home', '/Index', '/H'],
      name: 'Lobby',
      component: Lobby
    },
    {
      path: '/Host',
      name: 'Host',
      component: Host
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
