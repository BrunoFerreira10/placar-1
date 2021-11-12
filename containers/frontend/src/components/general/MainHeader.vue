<template>
  <v-app-bar app clipped-left dark>
    <v-app-bar-nav-icon @click="toogleMenu">
      </v-app-bar-nav-icon>

      <v-toolbar-title>{{ this.$route.name[1] }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>account_box</v-icon>
      </v-btn>
  </v-app-bar>
</template>

<script>
import eventbus from '@/eventbus.js'

export default {
  name: "MainHeader",
  methods: {
    toogleMenu() {
      eventbus.toogleMenuEvent()
    }
  }
}
</script>

<style>
  
</style>