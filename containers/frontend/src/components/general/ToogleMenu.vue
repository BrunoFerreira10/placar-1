<template>
  <v-navigation-drawer
    ref="pu-navigation"
    app
    clipped
    dark
    v-model="toogleMenu"
  >
    <v-list>
      <v-img class="pa-8 ma-auto" src=@/assets/logo.png contain max-width="50px"
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
import ToogleMenuItem from "@/components/general/ToogleMenuItem";

export default {
  name: "ToogleMenu",
  components: {
    ToogleMenuItem,
  },
  data() {
    return {
      toogleMenu: true,
      menuItens: [
        {
          type: "item",
          title: "Dashboards",
          to: "/",
          icon: "dashboard_customize",
          menuItens: [],
        },
        {
          type: "group",
          title: "Consultas",
          to: "",
          icon: "search",
          menuItens: [
            {
              type: "sub-item",
              title: "Veículos",
              to: "/queries/vehicles",
              icon: "mdi-car-side",
              menuItens: [],
            },
            {
              type: "sub-item",
              title: "Testes",
              to: "/queries/tests",
              icon: "mdi-list-status",
              menuItens: [],
            },
            {
              type: "sub-item",
              title: "Estatísticas",
              to: "/queries/stats",
              icon: "bar_chart",
              menuItens: [],
            },
            {
              type: "sub-item",
              title: "Timers",
              to: "/queries/timers",
              icon: "timer",
              menuItens: [],
            },
          ],
        },
        {
          type: "group",
          title: "Relatórios",
          to: "",
          icon: "description",
          menuItens: [
            {
              type: "sub-item",
              title: "Vehicles",
              to: "/reports/vehicles",
              icon: "dashboard_customize",
              menuItens: [],
            },
            {
              type: "sub-item",
              title: "Testes",
              to: "/reports/tests",
              icon: "mdi-list-status",
              menuItens: [],
            },
            {
              type: "sub-item",
              title: "Estatísticas",
              to: "/reports/stats",
              icon: "bar_chart",
              menuItens: [],
            },
            {
              type: "sub-item",
              title: "Timers",
              to: "/reports/timers",
              icon: "timer",
              menuItens: [],
            },
          ],
        },
      ],
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

