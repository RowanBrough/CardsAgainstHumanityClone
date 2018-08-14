<template>
  <v-layout align-start justify-start row v-if="!hidden">
    {{ hidden }}
    <v-btn fab small color="amber" :to="(dialog?'':to)" v-if="img.length == 0">
      <v-icon dark>chevron_left</v-icon>
    </v-btn>
    <v-btn fab small color="amber" :to="to" v-else>
      <img class="profile-image" :src="img" />
    </v-btn>
    <h2 class="text-xs-center py-3 w-100" v-if="title.length > 0">{{ title }}</h2>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{ dialogHeader }}</v-card-title>
        <v-card-text>{{ dialogText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="amber darken-2" @click.native="dialog = false">{{ dialogBtnCancel }}</v-btn>
          <v-btn color="amber" :to="to">{{ dialogBtnConfirm }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'toolbar',
    props: {
      hidden: {
        type: Boolean,
        default: false
      },
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
      },
      dialog: {
        type: Boolean,
        default: false
      },
      dialogHeader: {
        type: String,
        default: 'Are you sure?'
      },
      dialogText: {
        type: String,
        default: 'leaving this page will kick you from the game.'
      },
      dialogBtnConfirm: {
        type: String,
        default: 'Leave Page'
      },
      dialogBtnCancel: {
        type: String,
        default: 'Stay'
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
