<template>
  <div>
    <!-- news category selection -->
    <v-select
      :items="items"
      label="News category"
      color="black"
      multiple="true"
      class="mx-auto text-right"
      hint="You can pick up various type of news :)"
      persistent-hint
      prepend-icon="$bmark"
      v-model="categoryValue"
    ></v-select>
    <!-- date picker -->
    <DatePickerComp />
    <!-- news fetching confirmation button -->
    <v-btn
      class="accent pa=3 newsBtn"
      block
      :to="{ name: 'News', params: { categoryValue } }"
    >
      <v-icon>$news</v-icon>
      Show my news
    </v-btn>

    <!-- when pressing show news, progress bar should be visible -->
    <!-- date picker by default its today -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import DatePickerComp from "./DatePickerComp.vue";
import NewsList from "../lib/NewsList";

@Component({
  components: {
    DatePickerComp
  }
})
export default class CategoryComp extends Vue {
  // news caterogy includes
  // - business, market, world, politics, technology, breakingviews, sport, life
  private categoryValue: Array<string> = [];
  private newslist: any = new NewsList();
  private passRes: any = [];
  // maybe can add icons for each
  private items: Array<string> = [
    "business",
    "general",
    "health",
    "science",
    "technology",
    "sports"
  ];
  private msg: string = "testing msg";
  private async getNewsInfo() {
    var res = await this.newslist.getNewsByCategory();
    this.passRes = res.sources;
  }
}
</script>

<style scoped>
.newsBtn {
  margin-bottom: 170px;
}
</style>
