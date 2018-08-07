<template>
  <v-layout align-start justify-start row>
    <v-btn fab small color="amber" :to="to" v-if="img.length == 0">
      <v-icon dark>chevron_left</v-icon>
    </v-btn>
    <v-btn fab small color="amber" :to="to" v-else>
      <img class="profile-image" :src="img" />
    </v-btn>
      <h2 class="text-xs-center py-3 w-100" v-if="title.length > 0">{{ title }}</h2>
  </v-layout>
</template>

<script>
  export default {
    name: 'toolbar',
    props: {
      title: {
        type: String,
        default: ''
      },
      to: {
        type: String,
        default: 'Lobby'
      },
      img: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .profile-image {
    width: 100%;
    height: auto;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    border-radius:50%;
  }
  .w-100 {
    width: 100%;
    padding-right: 50px;
  }
</style>
