<template>
  <v-navigation-drawer
    ref="pu-navigation"
    app
    clipped
    v-model="toogleMenu"    
  >
    <v-list>
      <v-img class="pa-8 ma-auto" src=@/assets/logo.png contain max-width="60px"
      />

      <v-list dense flat color="indigo--text">
        <toogle-menu-item
          v-for="item in menuItens"
          :key="item.id"
          :data="item"
        />
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import eventbus from "@/eventbus.js";
import menuList from "@/router/menuList.js"
import ToogleMenuItem from "@/components/general/ToogleMenuItem";

export default {
  name: "ToogleMenu",
  components: {
    ToogleMenuItem,
  },
  data() {
    return {
      toogleMenu: true,
      menuItens: menuList.menuList
    };
  },
  created() {
    eventbus.onToogleMenu(() => {
      const toogle =
        this.$refs["pu-navigation"].$el.style.transform === "translateX(-100%)";
      this.toogleMenu = toogle;
    });
  },
};
</script>

<style scoped>
  
</style>