<template>
  <div>
    <h1>Report Timers</h1>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit('navigation/setToogleMini',{value: true})
  }
};
</script>
