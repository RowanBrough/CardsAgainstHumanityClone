<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 v-if="!hasName">
        <p class="text-xs-center m-5">
          Hi, welcome to Cards Against Humanity.<br />
          We see you are new, why don't you add your name and maybe a picture of yourself.<br />
          This is so people can see it was actually you making that hilarious joke.
        </p>
      </v-flex>

      <v-flex xs12 class="text-center mb-5">
        <div id="image-uploader">
          <label for="upload-photo" class="default-image" :style="userImage"></label>
          <input type="file" accept="image/*" id="upload-photo" v-on:change="saveImage" />
        </div>
      </v-flex>

      <v-flex xs12>
        <v-form>
          <v-text-field v-model="username" label="Name" v-on:keyup="saveName"></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        username: '',
        img: '',
        timer: null
      }
    },
    computed: {
      userImage: function() {
        if(this.img && this.img.length > 0) {
          return "background-image:url(" + this.img + ");";
        }
        return "background-image:url(" + require('../assets/default_user.png') + ");";
      },
      hasName: function() {
        return (this.username && this.username.length > 0);
      }
    },
    created: function() {
      // set the navigation toolbar
      this.$parent.nav.to = '/Lobby';
      this.$parent.nav.img = '';
      this.$parent.nav.title = 'Your Profile';

      // check if a user has been created
      var userName = localStorage.getItem('userName');
      if(userName && userName.length && userName != 'undefined') {
        this.username = userName;
      }
      var img = localStorage.getItem('userImage');
      if(img && img.length > 0) {
        this.img = img;
      }
    },
    methods: {
      saveName: function() {
        localStorage.setItem("userName", this.username);
      },
      saveImage: function (event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.img = e.target.result;
                localStorage.setItem("userImage", this.img);
            }
            reader.readAsDataURL(input.files[0]);
        }
      }
    }
  }
</script>

<style scoped>
  #image-uploader label {
    cursor: pointer;
    display: block;
    width: 196px;
    height: 196px;
    margin: auto;
    -moz-border-radius:98px;
    -webkit-border-radius:98px;
    border-radius:98px;
  }
  #image-uploader input[type="file"] {
     opacity: 0;
     position: absolute;
     z-index: -1;
  }
  .default-image {
    background-size: 196px 196px;
  }
</style>
