<template>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>
      <v-flex xs12>

        <div class="header">
          <div class="card black">
            <h1>Cards<br />Against<br />Humanity</h1>
          </div>
        </div>

      </v-flex>

      <v-flex xs12>
        <v-btn color="amber" block large to="host">Host Game</v-btn>
      </v-flex>

      <v-flex xs12>
        <v-btn color="amber" block large to="join">Join Game</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'lobby',
    data () {
      return {
        profileImage: ''
      }
    },
    created: function() {
      var img = localStorage.getItem('userImage');
      if(img && img.length > 0) {
        this.profileImage = img;
      }
      else {
        this.profileImage = require('../assets/default_user.png');
      }

      this.$parent.nav.to = '/User';
      this.$parent.nav.img = this.profileImage;
      this.$parent.nav.title = '';
    }
  }
</script>

<style scoped>
  .header {
    width: 225px;
    margin: auto;
  }
  .header h1 {
    text-align: left;
    font-weight: bold;
  }
  .header .card {
    padding-bottom: 80px;
  }
</style>
