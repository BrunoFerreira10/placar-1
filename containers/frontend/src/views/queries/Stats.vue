<template>
  <div>
    <h1>Querie Stats</h1>
    <div>
    <ccv-stacked-bar-chart :data="stackedBarData" :options="stackedBarOptions"></ccv-stacked-bar-chart>
    </div>
  </div>
</template>

<script>
import '@carbon/charts/styles.css'
import { CcvStackedBarChart } from "@carbon/charts-vue"

export default {
  components: {
    CcvStackedBarChart
  },
  data() {
    return {
      stackedBarData: {
        labels: ["Quantity", "Leads", "Sold", "Restocking", "Misc"],
        datasets: [
          {
            label: "Dataset 1",
            data: [65000, 29123, 35213, 51213, 16932]
          },
          {
            label: "Dataset 2",
            data: [32432, 21312, 56456, 21312, 34234]
          },
          {
            label: "Dataset 3",
            data: [12312, 23232, 34232, 12312, 34234]
          }
        ]
      }
      ,
      stackedBarOptions: {
        axes: {
          left: {
            primary: true,
            stacked: true
          },
          bottom: {
            scaleType: "labels",
            secondary: true
          }
        },
        height: "800px",        
      }
    }
  }
}
</script>
