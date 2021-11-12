<template >
  <v-container class="pu-view ma-0 pa-0">
    <grid-layout
      id="pu-dashboard-grid"
      :layout.sync="layout"
      :col-num="12"
      :row-height="50"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="false"
      :margin="[10, 10]"
      :use-css-tranforms="true"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <component :is="item.widget"></component>
      </grid-item>
    </grid-layout>
  </v-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import BasicWidget1 from "@/components/widgets/BasicWidget1.vue";
import BasicWidget2 from "@/components/widgets/BasicWidget2.vue";
import BasicWidget3 from "@/components/widgets/BasicWidget3.vue";

export default {
  components: {
    GridLayout,
    GridItem,
    BasicWidget1,
    BasicWidget2,
    BasicWidget3,
  },
  data: () => ({
    layout: [
      {
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        i: "0",
        widget: "basic-widget",
        props: { title: "Bom dia" },
        widget: "BasicWidget1",
      },
      {
        x: 2,
        y: 2,
        w: 3,
        h: 3,
        i: "1",
        widget: "basic-widget",
        props: { title: "Bom dia" },
        widget: "BasicWidget2",
      },
      {
        x: 2,
        y: 2,
        w: 6,
        h: 3,
        i: "2",
        widget: "basic-widget",
        props: { title: "Bom dia" },
        widget: "BasicWidget3",
      },
    ],
  }),  
};
</script>

<style>
.vue-grid-item.vue-grid-placeholder {
  background: #3f51b5;
}

.pu-widget {
  background-color: rgba(255, 255, 255, 0.08);
  height: 100%;
  width: 100%;
}

.pu-widget h3 {
  color: #fff;
}
</style>

<style scoped>


</style>