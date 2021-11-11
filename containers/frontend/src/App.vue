<template>
  <v-app id="app">
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click="toogleMenu = !toogleMenu">
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

    <v-main>
      <v-container class="pu-main-container fill-height pa-0 ma-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    
    <v-navigation-drawer
      app
      clipped
      dark
      v-model="toogleMenu"      
    >
      <toogle-menu />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import ToogleMenu from "@/components/general/ToogleMenu";

export default {
  name: "App",
  components: {
    ToogleMenu,
  },
  data: () => ({
    toogleMenu: false
  })
};
</script>

<style>

.pu-main-container {
  width: 100%;
  max-width: 100%;
}

.pu-view {
  background-color: #121212;
  height: 100%;
  width: 100%;
  max-width: 100%;
}

</style>
