<template>
  <div class="d-md-flex flex-wrap">
    <!-- in cicle logo shows news source -->
    <v-card
      class="mx-5 my-5"
      max-width="344"
      style="text-align:left"
      v-for="news in newsAll"
      :key="news.id"
    >
      <v-list-item three-line>
        <v-list-item-avatar size="50" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div class="overline mb-4">News from {{ news.publisher }}</div>
          <v-list-item-title class="headline mb-1"
            >{{ news.title }}
          </v-list-item-title>

          <v-list-item-subtitle> {{ news.content }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn text>Hide</v-btn>
        <v-btn text>Read more</v-btn>
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
  category: string;
}

@Component({})
export default class NewsCollection extends Vue {
  private hideNewsCard: boolean = false;
  constructor() {
    super();
  }
  private newsAll: Array<newsBundle> = [
    {
      title: "title1",
      content: "content1",
      publisher: "publisher1",
      publishedOn: "17-Dec, 19",
      category: "sport"
    },
    {
      title: "title2",
      content: "content2",
      publisher: "publisher2",
      publishedOn: "17-Dec, 19",
      category: "business"
    },
    {
      title: "title3",
      content: "content3",
      publisher: "publisher3",
      publishedOn: "17-Dec, 19",
      category: "market"
    },
    {
      title: "title4",
      content: "content4",
      publisher: "publisher4",
      publishedOn: "17-Dec, 19",
      category: "technology"
    },
    {
      title: "title5",
      content: "content5",
      publisher: "publisher5",
      publishedOn: "17-Dec, 19",
      category: "market"
    }
  ];

  mounted() {}
}
</script>

<style scoped></style>
