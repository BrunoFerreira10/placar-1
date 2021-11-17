<template>
  <v-container class="pu-widget elevation-6">
    <ccv-meter-chart
      :data="data"
      :options="options"
      height="100%"
    ></ccv-meter-chart>
  </v-container>
</template>

<script>
export default {
  name: "CarbonMeterChartMock",
  props: { 
    props: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      data: [
        {
          group: "Dataset 1",
          value: this.props.valor,
        },
      ],
      options: {
        toolbar: {
          enabled: false,
        },
        meter: {
          peak: 90,
          status: {
            ranges: [
              {
                range: [90, 100],
                status: "success",
              },
              {
                range: [80, 90],
                status: "warning",
              },
              {
                range: [0, 80],
                status: "danger",
              },
            ],
          },
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

