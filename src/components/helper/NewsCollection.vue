<template>
  <div class="d-md-flex flex-wrap mb-12">
    <!-- in cicle logo shows news source -->
    <v-card
      class="mx-5 my-5"
      max-width="375"
      style="text-align:left"
      v-for="news in newsAll"
      :key="news.id"
    >
      <v-list-item three-line>
        <v-list-item-avatar size="50" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div class="overline font-weight-bold">
            News from {{ news.publisher }}
          </div>
          <div class="overline font-italic font-weight-light mb-4 text-end">
            on {{ news.publishedOn }}
          </div>
          <v-list-item-title class="headline mb-1"
            >{{ news.title }}
          </v-list-item-title>

          <v-list-item-subtitle>
            <p>
              {{ news.content }}
            </p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <!-- based on the category, color will be changed -->
        <p
          class="ml-5 mb-0 text-uppercase font-weight-bold warning white--text"
        >
          |{{ news.category }}|
        </p>
        <v-spacer></v-spacer>
        <!-- hide button close the card -->
        <!-- when card closed, remaining cards position will be changed -->
        <v-btn text>Hide </v-btn>
        <!-- read more button open url to another tab -->
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
      content: "concent",
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

<style scoped>
.categoryColor {
  color: red;
}
</style>
