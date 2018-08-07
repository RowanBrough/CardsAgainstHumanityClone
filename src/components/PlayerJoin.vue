<template>

  <v-list>
     <v-list-tile v-for="player in playerList" :key="player.name" avatar>
       <v-list-tile-action>
         <v-icon v-if="item.icon" color="amber">gavel</v-icon>
       </v-list-tile-action>

       <v-list-tile-content>
         <v-list-tile-title v-text="item.name"></v-list-tile-title>
       </v-list-tile-content>

       <v-list-tile-avatar>
         <img :src="item.image">
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
      playerJoined(_playerList) {
        this.playerList = _playerList;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
