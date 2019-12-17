<template>
  <div class="d-flex">
    <!-- in cicle logo shows news source -->
    <v-card
      class="mx-5 mt-5"
      max-width="344"
      style="text-align:left"
      v-for="news in newsAll"
      :key="news.id"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1"
            >Headline 5</v-list-item-title
          >
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

interface newsBundle {
  title: string;
  content: string;
  publisher: string;
  publishedOn: string;
}

@Component({})
export default class NewsCollection extends Vue {
  constructor() {
    super();
  }
  private newsAll: Array<newsBundle> = [
    {
      title: "title1",
      content: "content1",
      publisher: "publisher1",
      publishedOn: "17-Dec, 19"
    },
    {
      title: "title2",
      content: "content2",
      publisher: "publisher2",
      publishedOn: "17-Dec, 19"
    },
    {
      title: "title3",
      content: "content3",
      publisher: "publisher3",
      publishedOn: "17-Dec, 19"
    },
    {
      title: "title4",
      content: "content4",
      publisher: "publisher",
      publishedOn: "17-Dec, 19"
    }
  ];

  mounted() {}
}
</script>

<style scoped></style>
