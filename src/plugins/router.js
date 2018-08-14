import Vue from 'vue'
import Router from 'vue-router'

import Game from '@/views/Game'
import Host from '@/views/Host'
import Join from '@/views/Join'
import Lobby from '@/views/Lobby'
import User from '@/views/User'

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
    },
    {
      path: '/Game',
      name: 'Game',
      component: Game,
      props: true
    }
  ]
})
