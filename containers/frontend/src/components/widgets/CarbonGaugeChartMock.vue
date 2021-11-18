<template>
  <v-container class="pu-widget elevation-6">
    <ccv-gauge-chart
      :data="data"
      :options="options"
      height="100%"
    ></ccv-gauge-chart>
  </v-container>
</template>

<script>
export default {
  name: "CarbonGaugeChartMock",
  data() {
    return {
      data: [
        {
          group: "value",
          value: 42,
        },
        {
          group: "delta",
          value: -13.37,
        },
      ],
      options: {
        toolbar: {
          enabled: false,
        },
        resizable: true,
        height: "100%",
        width: "100%",
        gauge: {
          type: "semi",
          status: "danger",
        },
      },
    };
  },
};
</script>

<style >
.chart-grid-backdrop {
  fill: transparent !important;
}

.graph-frame {
  height: 100%;
}
</style>

