<template>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>

      <v-flex xs12 align-center>
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

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'join',
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
          alert("JOINED THE ROOM!!!");
        }
        else {
          alert("nooope");
        }
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
