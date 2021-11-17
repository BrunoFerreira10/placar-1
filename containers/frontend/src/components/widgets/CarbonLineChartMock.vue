<template>
  <v-container class="pu-widget elevation-6">
    <ccv-line-chart
      :data="data"
      :options="options"
      height="100%"
    ></ccv-line-chart>
  </v-container>
</template>

<script>
export default {
  name: "CarbonLineChartMock",
  data() {
    return {
      data: [
        {
          group: "Dataset 1",
          date: "2021-10-17T00:00:00.000Z",
          value: 85,
        },
        {
          group: "Dataset 1",
          date: "2021-10-19T00:00:00.000Z",
          value: 90,
        },
        {
          group: "Dataset 1",
          date: "2021-10-23T00:00:00.000Z",
          value: 88,
        },
        {
          group: "Dataset 1",
          date: "2021-10-24T00:00:00.000Z",
          value: 75,
        },
        {
          group: "Dataset 1",
          date: "2021-10-25T00:00:00.000Z",
          value: 80,
        },
        {
          group: "Dataset 1",
          date: "2021-10-26T00:00:00.000Z",
          value: 82,
        },
        {
          group: "Dataset 1",
          date: "2021-10-27T00:00:00.000Z",
          value: 86,
        },
        {
          group: "Dataset 1",
          date: "2021-10-28T00:00:00.000Z",
          value: 91,
        },
        {
          group: "Dataset 1",
          date: "2021-11-01T00:00:00.000Z",
          value: 88,
        },
        {
          group: "Dataset 1",
          date: "2021-11-02T00:00:00.000Z",
          value: 85,
        },
        {
          group: "Dataset 1",
          date: "2021-11-03T00:00:00.000Z",
          value: 87,
        },
        {
          group: "Dataset 1",
          date: "2021-11-04T00:00:00.000Z",
          value: 88,
        },
        {
          group: "Dataset 1",
          date: "2021-11-05T00:00:00.000Z",
          value: 91,
        },
        {
          group: "Dataset 1",
          date: "2021-11-08T00:00:00.000Z",
          value: 89,
        },
        {
          group: "Dataset 1",
          date: "2021-11-09T00:00:00.000Z",
          value: 92,
        },
        {
          group: "Dataset 1",
          date: "2021-11-10T00:00:00.000Z",
          value: 90,
        },
        {
          group: "Dataset 1",
          date: "2021-11-11T00:00:00.000Z",
          value: 91,
        },
        {
          group: "Dataset 1",
          date: "2021-11-12T00:00:00.000Z",
          value: 90,
        },
        {
          group: "Dataset 1",
          date: "2021-11-15T00:00:00.000Z",
          value: 92,
        },
        {
          group: "Dataset 1",
          date: "2021-11-16T00:00:00.000Z",
          value: 94,
        },
      ],
      options: {
        toolbar: {
          enabled: false,
        },
        axes: {
          bottom: {
            title: "FRC",
            mapsTo: "date",
            scaleType: "time",
          },
          left: {
            mapsTo: "value",
            scaleType: "linear",
            domain: [
              80,100
            ]
          },
        },
        legend: {
          enabled: false,
        },
        curve: "curveMonotoneX",
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

