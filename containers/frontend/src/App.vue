<template>
  <v-app id="app">
    
    <main-header />    

    <v-main>
        <router-view></router-view>
    </v-main>
    
    <toogle-menu />
    
  </v-app>
</template>

<script>
import MainHeader from "@/components/general/MainHeader";
import ToogleMenu from "@/components/general/ToogleMenu";

export default {
  name: "App",
  components: {
    MainHeader,
    ToogleMenu,
  },
  data: () => ({
    toogleMenu: false
  })
};
</script>

<style>

.pu-view {
  height: 100%;
  width: 100%;
  max-width: 100% !important;
  background-color: #121212;  
}

</style>
