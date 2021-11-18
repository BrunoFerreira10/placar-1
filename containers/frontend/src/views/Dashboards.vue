<template >
  <v-container class="pu-view pu-view-dashboard pa-0">
    <grid-layout
      class="pu-dashboard-grid"
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
        <span class="pu-widget-btn-close" @click="removeItem(item.i)">x</span>
        <component :is="item.widget" :props="item.props"></component>
      </grid-item>
    </grid-layout>

    <v-btn
      color="indigo"
      class="pu-btn-add-widget"
      fab
      small
      absolute
      bottom
      right
      @click="addItem('KickstartLineChartMock')"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import Widgets from "@/components/widgets/index.js";

export default {
  components: {
    GridLayout,
    GridItem,
    ...Widgets,
  },
  data: () => ({
    index: 0,
    layout: [
      {
        x: 0,
        y: 0,
        w: 4,
        h: 12,
        i: "0",
        widget: "CarbonLineChartMock",
        props: {},
      },
      {
        x: 7,
        y: 0,
        w: 2,
        h: 8,
        i: "1",
        widget: "CarbonGaugeChartMock",
        props: {},
      },
      {
        x: 4,
        y: 0,
        w: 3,
        h: 4,
        i: "2",
        widget: "CarbonMeterChartMock",
        props: { valor: 75 },
      },
      {
        x: 4,
        y: 4,
        w: 3,
        h: 4,
        i: "3",
        widget: "CarbonMeterChartMock",
        props: { valor: 85 },
      },
      {
        x: 4,
        y: 8,
        w: 3,
        h: 4,
        i: "4",
        widget: "CarbonMeterChartMock",
        props: { valor: 95 },
      },
      {
        x: 0,
        y: 12,
        w: 4,
        h: 12,
        i: "5",
        widget: "KickstartLineChartMock",
        props: {},
      },
      {
        x: 0,
        y: 12,
        w: 4,
        h: 12,
        i: "6",
        widget: "KickstartAreaChartMock",
        props: {},
      },
    ],
  }),
  mounted(){
    this.index = this.layout.length;
  },
  methods: {
    removeItem(itemId) {
      const index = this.layout.map((item) => item.i).indexOf(itemId);
      this.layout.splice(index, 1);
    },
    addItem: function (widget) {
    
    const lastRow = this.layout.reduce((lastRow, item) => item.y + item.h > lastRow ? item.y + item.h : lastRow, 0)

    this.layout.push({
      x: 0,
      y: lastRow,
      w: 4,
      h: 12,
      i: this.index,
      widget: widget,
      props: {},
    });
    
    this.index++;
  },
  },
  
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
  padding-top: 15px;
  overflow: hidden;
}

.pu-widget h3 {
  color: #fff;
}

.pu-widget-btn-close {
  position: absolute;
  top: -2px;
  right: 5px;
  cursor: pointer;
}
</style>

<style scoped>
.pu-view-dashboard {
  margin-bottom: 200px;
}

.pu-btn-add-widget {
  bottom: 15px !important;
  position: fixed;
}
</style>