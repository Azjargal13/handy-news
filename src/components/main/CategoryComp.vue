<template>
  <div>
    <v-select
      :items="items"
      label="News category"
      color="black"
      multiple="true"
    ></v-select>
    <v-btn>
      <v-icon>$news</v-icon>
      Show my news
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class CategoryComp extends Vue {
  // news caterogy includes
  // - business, market, world, politics, technology, breakingviews, sport, life

  // maybe can add icons for each
  private items: Array<string> = [
    "business",
    "market",
    "world",
    "politics",
    "technology",
    "breaking views",
    "sport",
    "life"
  ];
}
</script>

<style scoped></style>>
