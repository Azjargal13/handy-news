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
        <v-list-item-avatar size="40" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div class="overline font-weight-bold">
            from {{ news.source.name }}
          </div>
          <div class="overline font-italic font-weight-light text-end">
            {{ news.publishedAt }}
          </div>
        </v-list-item-content>
      </v-list-item>
      <div>
        <div class="title mb-3 ml-5">
          {{ news.title }}
        </div>
        <!-- <div>
          <img src="">
            {{ news.description }}
          </img>
        </div> -->
        <div>
          <p class="subtitle mx-6">
            {{ news.description }}
          </p>
        </div>
      </div>
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
    <!-- {{ newsSources }} -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import NewsList from "../lib/NewsList";
import { Watch, Prop } from "vue-property-decorator";
import { newsBundle, selectValues } from "../../types";
@Component({})
export default class NewsCollection extends Vue {
  private newsAll: Array<newsBundle> = [];
  private newsSources: Array<string> = [];

  @Prop({ default: [] })
  categoryValue!: Array<string>;

  @Prop({ default: [] })
  selectedValues!: Array<selectValues>;

  async mounted() {
    // shows news by category
    const listService = new NewsList();
    let newsAll: any = await listService.getEverything(this.selectedValues);
    //let newsSources: any = await listService.getNewsBySources();
    this.newsAll = newsAll.articles;
    //this.newsSources = newsSources.sources;

    // want to show only selected source based on its category!
  }
}
</script>

<style scoped>
.categoryColor {
  color: red;
}
.title {
  line-height: 25px;
}
.subtitle {
  text-align: justify;
}
</style>
