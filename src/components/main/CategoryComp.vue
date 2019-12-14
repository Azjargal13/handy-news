<template>
  <div>
    <!-- <v-select
          :items="items"
          label="Standard"
        ></v-select> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
export default class CategoryComp extends Vue {
  // news caterogy includes
  // - business, market, world, politics, technology, breakingviews, sport, life
  private items: Array<string> = [
    "business",
    "market",
    "world",
    "politics",
    "technology",
    "breakingviews",
    "sport",
    "life"
  ];
}
</script>

<style scoped></style>>
