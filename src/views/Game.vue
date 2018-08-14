<template>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>

      <v-flex xs12 align-center v-if="isJudge">
        <p>
          You are the judge, now is your time to harshly judge your friends sense of humor.
          Select the card you find funniest, the player who came up with that combination will win the round.
        </p>
      </v-flex>
      <v-flex xs12 align-center v-else>
        You are not a judge
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Game',
    data () {
      return {
        view: '',
        room: null,
        socketId:null,
        isJudge:null,
        blackCard:null,
        points:null
      }
    },
    sockets: {
      GET_SOCKET_ID_RESPONSE: function(id) {
        this.socketId = id;
      }
    },
    created: function() {
      this.$parent.nav.hidden = true;
    },
    mounted: function() {
      this.room = JSON.parse(localStorage.getItem('roomData'));
      this.$socket.emit('GET_SOCKET_ID');
    },
    methods: {
      init: function () {
        var response = this.playerExists(this.room.playerList)
        if(response.success) {
          this.isJudge = response.player.judge;
        }
        this.isJudge = false;
      },

      playerExists: function(array,) {
        for (var i=0; i < array.length; i++) {
          if (array[i].id === this.socketId) {
              return {
                  success:true,
                  index: i,
                  player: array[i]
              };
          }
        }
        return {
          success:false
        }
      }
    },
    watch: {
      socketId: function () {
        this.init();
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
