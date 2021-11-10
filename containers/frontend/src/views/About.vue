<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit('navigation/setToogleMini',{value: true})
  }
};
</script>
