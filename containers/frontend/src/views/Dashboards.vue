<template >
  <v-container class="pu-view ma-0 pa-0">
    <grid-layout
      id="pu-dashboard-grid"
      :layout.sync="layout"
      :col-num="12"
      :row-height="10"
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
        <component :is="item.widget" :props="item.props"></component>
      </grid-item>
    </grid-layout>
  </v-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import Widgets from "@/components/widgets/index.js";

export default {
  components: {
    GridLayout,
    GridItem,
    ...Widgets
  },
  data: () => ({
    layout: [
      {
        x: 0, y: 0, w: 4,h: 12,i: "0",
        widget: "CarbonLineChartMock", props: { },        
      },
      {
        x: 7, y: 0, w: 2, h: 8, i: "1", 
        widget: "CarbonGaugeChartMock", props: { },        
      },
      {
        x: 4, y: 0, w: 3, h: 4, i: "2",
        widget: "CarbonMeterChartMock", props: { valor: 75 },
      },      
      {
        x: 4, y: 4, w: 3, h: 4, i: "3",
        widget: "CarbonMeterChartMock", props: { valor: 85 },
      },      
      {
        x: 4, y: 8, w: 3, h: 4, i: "4",
        widget: "CarbonMeterChartMock", props: { valor: 95 },
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
  overflow: hidden;
}

.pu-widget h3 {
  color: #fff;
}
</style>

<style scoped>


</style>