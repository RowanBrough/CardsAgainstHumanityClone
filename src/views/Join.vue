<template>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>

      <v-flex xs12 align-center v-if="!joined">
        <p>
          awkwardly stare at the game host until they tell you the secret code.<br />
          then enter it here:
        </p>

        <v-text-field box label="Secret Code" mask="aaaa aaaa" v-model="secretCode"></v-text-field>

        <v-alert type="error" v-if="error.length > 0">
          {{ error }}
        </v-alert>

        <v-btn block color="amber" dark v-on:click.prevent="join">Join Game</v-btn>
      </v-flex>
      <v-flex xs12 align-center v-else>
        <p>
          waiting for host to start the game
        </p>
        <v-progress-linear :indeterminate="true" color="amber"></v-progress-linear>
        <PlayerJoin ref="playerJoin"></PlayerJoin>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import PlayerJoin from '@/components/PlayerJoin.vue'
  export default {
    name: 'join',
    components: { PlayerJoin },
    data () {
      return {
        joined:false,
        secretCode:'',
        error: ''
      }
    },
    created: function() {
      this.$parent.nav.to = '/Lobby';
      this.$parent.nav.img = '';
      this.$parent.nav.title = 'Join A Game';
    },
    sockets:{
      JOIN_RESPONSE: function(roomExists) {
        if(roomExists) {
          this.joined = true;
          this.$parent.nav.dialog = true;
        }
        else {
          this.error = 'unable to join the game';
          this.joined = false;
        }
      },
      START_GAME_RESPONSE(room) {
        this.$parent.$router.push({ path: '/Game', params: { room: room }});
      }
    },
    methods: {
      join: function() {
        this.error = '';
        if(this.secretCode.length != 8) {
          console.log('the secret code is invalid');
          this.error = 'the secret code is invalid';
        }
        else {
          var joinParams = {
            secretCode: this.secretCode,
            host: false,
            name: localStorage.getItem('userName'),
            image: ''//localStorage.getItem('userImage')
          }
          console.log("sending join request: ", joinParams);
          this.$socket.emit('JOIN_REQUEST', joinParams);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
