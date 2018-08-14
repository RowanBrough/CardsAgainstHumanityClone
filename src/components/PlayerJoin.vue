<template>

  <v-list>
     <v-list-tile v-for="player in playerList" :key="player.id" avatar>
       <v-list-tile-action>
         <v-icon v-if="player.host" color="amber">gavel</v-icon>
       </v-list-tile-action>

       <v-list-tile-content>
         <v-list-tile-title v-text="player.name"></v-list-tile-title>
       </v-list-tile-content>

       <v-list-tile-avatar>
         <img :src="player.image">
       </v-list-tile-avatar>
     </v-list-tile>
   </v-list>

</template>

<script>
  export default  {
    name: 'playerJoin',
    data () {
      return {
        playerList: []
      }
    },
    sockets: {
      PLAYER_JOINED(playerList) {
        console.log("PLAYER_JOINED: ", playerList);
        this.playerList = playerList;
      },
      PLAYER_REMOVED(playerList) {
        console.log("PLAYER_JOINED: ", playerList);
        this.playerList = playerList;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
