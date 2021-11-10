<template>
  <v-app id="app">
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click="setToogleMenu(!toogleMenu)">
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
      mini-variant
      mini-variant-width="56"
      clipped
      stateless
      dark
      style="z-index: 5"
      v-model="toogleMini"
    >
      <v-list dense color="blue-gray--text" class="pt-0">
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>dashboard_customize</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboards</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      clipped
      dark
      v-model="toogleMenu"
      :class="toogleMini ? 'ml-lg-14' : ''"
    >
      <pu-navigation />
    </v-navigation-drawer>
  </v-app>
</template>


<script>
import puNavigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    puNavigation,
  },
  data: () => ({}),
  computed: {
    toogleMenu() {
      return this.$store.state.navigation.toogleMenu;
    },
    toogleMini() {
      return this.$store.state.navigation.toogleMini;
    },
  },
  methods: {
    setToogleMenu(value) {
      this.$store.commit("navigation/setToogleMenu", { value: value });
    },
    setToogleMini(value) {
      this.$store.commit("navigation/setToogleMini", { value: value });
    },
  },
};
</script>

<style>
:root {
  --pu-blue-1: #1c3640;
  --pu-blue-2: #314759;
  --pu-blue-3: #6c7780;
  --pu-text-color-1: #a3b2bf;
}

.pu-text-color-1 {
  color: var(--pu-text-color-1) !important;
}

.pu-bgcolor-1 {
  background-color: var(--pu-blue-1) !important;
}

.pu-bgcolor-2 {
  background-color: var(--pu-blue-2) !important;
}

.pu-bgcolor-3 {
  background-color: var(--pu-blue-3) !important;
}

.pu-main-container {
  max-width: 100% !important;
}

.pu-component {
  background-color: #121212;
  height: 100%;
  width: 100%;
  max-width: 100% !important;
}

.pu-widget {
  background-color: rgba(255, 255, 255, 0.08);
  height: 100%;
  width: 100%;  
  
}

.container .vue-grid-item.vue-grid-placeholder {
    background: #3f51b5;
}

.pu-widget h3 {
  color: #fff;
}

</style>
