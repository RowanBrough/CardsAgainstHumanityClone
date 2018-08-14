<template>
  <v-container fluid id="app">
    <Toolbar :to="nav.to" :img="nav.img" :title="nav.title"></Toolbar>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Toolbar from '@/components/Toolbar.vue'

  export default {
    name: 'app',
    components: { Toolbar },
    data () {
      return {
        nav: {
          hidden: false,
          to: 'Lobby',
          img: '',
          title: '',
          dialog: false,
          dialogHeader: 'Are you sure?',
          dialogText: 'leaving this page will kick you from the game.',
          dialogBtnConfirm: 'Leave Page',
          dialogBtnCancel:'Stay',
        }
      }
    }
  }
</script>

<style>
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    color: #232323;
    font-family: 'Helvetica Bold', Helvetica, Arial;
  }
  .card {
    display: block;
    background-color: #fff;
    color: #232323;
    width: 100%;
    padding: 20px;
    -webkit-border-radius: 5%;
    -moz-border-radius: 5%;
    border-radius: 5%;
  }
  .card.black {
    background-color:#000;
    color: #fff;
  }
  a {
    color: #fff;
  }
  a.v-btn--disabled {
    color: #232323;
  }
</style>
