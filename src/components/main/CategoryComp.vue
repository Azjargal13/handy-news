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
    <DatePickerComp @passDate="getDate" />
    <!-- news fetching confirmation button -->
    {{ categoryValue }}
    {{ selectedDate }}
    <v-btn
      class="accent pa=3 newsBtn"
      block
      :to="{ name: 'News', params: { selectedValues } }"
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
import { Prop } from "vue-property-decorator";
import { newsItem, selectValues } from "../../types";

@Component({
  components: {
    DatePickerComp
  }
})
export default class CategoryComp extends Vue {
  @Prop({ default: [] })
  selectedSrc!: Array<newsItem>;

  // news caterogy includes
  // - business, market, world, politics, technology, breakingviews, sport, life
  private selectedDate: string = "";
  private categoryValue: Array<string> = [];
  private selectedValues: Array<selectValues> = [
    { category: [], newsSrc: [], date: "" }
  ];
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

  // mounted() {
  //   this.selectedValues = [
  //     {
  //       category: this.categoryValue,
  //       newsSrc: this.selectedSrc,
  //       date: this.selectedDate
  //     }
  //   ];
  // }
  getDate(value: string) {
    this.selectedDate = value;
  }
}
</script>

<style scoped>
.newsBtn {
  margin-bottom: 170px;
}
</style>
