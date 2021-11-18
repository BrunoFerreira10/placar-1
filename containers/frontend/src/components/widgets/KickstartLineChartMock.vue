<template>
  <v-container class="pu-widget elevation-6">
    <line-chart 
      :data="data" 
      :discrete="true"
      height="100%"
      curve="true"
      min="70"
      >
    </line-chart>
  </v-container>
</template>

<script>
export default {
  name: "KickstartLineChartMock",
  data() {
    return {
      data: {
        "2021-11-01": 85,
        "2021-11-02": 85,
        "2021-11-03": 90,
        "2021-11-04": 85,
        "2021-11-07": 90,
        "2021-11-08": 92,
        "2021-11-09": 93,
        "2021-11-10": 97,
        "2021-11-15": 92,
        "2021-11-16": 85,
        "2021-11-21": 80,
        "2021-11-22": 82,
      },
    };
  },
};
</script>

<style>
</style>