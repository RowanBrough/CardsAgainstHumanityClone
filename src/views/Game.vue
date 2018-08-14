<template>
  <v-container>
    <v-layout align-center justify-center row wrap fill-height>

      <v-flex xs12 align-center>
        
        <keep-alive>
         <component v-bind:is="view"></component>
        </keep-alive>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import ChooseCard from '@/components/Game_ChooseCard.vue'
  import CountDown from '@/components/Game_CountDown.vue'
  import Judge from '@/components/Game_Judge.vue'
  import Winner from '@/components/Game_Winner.vue'

  export default {
    name: 'Game',
    components: { CountDown, ChooseCard, Judge, Winner },
    props: ["room"],
    data () {
      return {
        view: 'CountDown'
      }
    },
    created: function() {
      this.$parent.nav.hidden = true;
    },
    sockets: {
      JOIN_RESPONSE: function() {
        
      }
    },
    mounted () {
      this.$socket.emit('START_GAME_REQUEST', this.room);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
