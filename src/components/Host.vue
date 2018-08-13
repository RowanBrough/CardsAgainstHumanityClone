<template>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>

      <v-flex xs12 align-center>
        <p class="uppercase">Secret Code:</p>
      </v-flex>

      <v-flex xs12 align-center class="amber--text lowercase display-2 font-weight-bold">
        <h1>{{ secretCode }}</h1>
      </v-flex>

      <v-flex xs12 align-center>
        <p>now you're in charge! tell your friends to enter this code to join the game</p>
      </v-flex>

      <v-flex xs12 align-center>
        <p class="uppercase">Waiting for people to join...</p>
      </v-flex>

      <v-flex xs12 align-center>
        <v-progress-linear :indeterminate="true" color="amber"></v-progress-linear>
      </v-flex>

      <v-flex xs12 align-center>
        <PlayerJoin ref="playerJoin"></PlayerJoin>
      </v-flex>

      <v-flex xs12>
        <v-btn color="amber" dark block large :disabled="startDisabled" v-on:click.prevent="startGame">Start Game</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import PlayerJoin from '@/components/PlayerJoin.vue'
  export default {
    name: 'host',
    data () {
      return {
        startDisabled: true,
        room:null
      }
    },
    computed: {
      secretCode: function() {
        if(this.room) {
          return this.room.secretCode.substring(0, 4) + " " + this.room.secretCode.substring(4, this.room.secretCode.length);
        }
        else {
          return '';
        }
      }
    },
    sockets:{
      HOST_RESPONSE: function(room) {
        console.log("this.room: ", room);
        this.room = room;
        var joinParams = {
          secretCode: this.room.secretCode,
          host: true,
          name: localStorage.getItem('userName'),
          image: ''//localStorage.getItem('userImage')
        }
        console.log("sending join request: ", joinParams);
        this.$socket.emit('JOIN_REQUEST', joinParams);
      },
      PLAYER_JOINED: function(playerList) {
        if(playerList.length >= 3) {
          startDisabled = false;
        }
      }
    },
    components: { PlayerJoin },
    created: function() {
      this.$parent.nav.to = '/Lobby';
      this.$parent.nav.img = '';
      this.$parent.nav.title = 'Your Game';
    },
    mounted: function() {
      this.$socket.emit('HOST_REQUEST');
    },
    methods: {
      startGame: function () {
        this.$socket.emit('START_GAME_REQUEST');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .uppercase {
    text-transform:uppercase;
  }
  .lowercase {
    text-transform:lowercase;
  }
</style>
