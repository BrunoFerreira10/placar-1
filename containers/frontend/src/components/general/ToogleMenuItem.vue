<template>

  <v-list-item v-if="data.type === 'item'" :to="data.to">
    <v-list-item-icon>
      <v-icon>{{ data.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ data.title }}</v-list-item-title>
  </v-list-item>

  <v-list-group
    v-else-if="data.type === 'group'"
    no-action
    color="blue-gray--text"
    :prepend-icon="data.icon"
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ data.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <toogle-menu-item
      v-for="item in data.menuItens"
      :key="item.id"
      :data="item"
    />
  </v-list-group>

  <v-list-item v-else-if="data.type === 'sub-item'" :to="data.to">
    <v-list-item-title>{{ data.title }}</v-list-item-title>
    <v-icon>{{ data.icon }}</v-icon>
  </v-list-item>

</template>

<script>
import ToogleMenuItem from "@/components/general/ToogleMenuItem";

export default {
  name: "ToogleMenuItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    ToogleMenuItem,
  },
};
</script>

<style>
</style>