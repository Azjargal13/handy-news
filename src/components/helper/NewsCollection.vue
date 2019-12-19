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
          <div class="overline font-weight-bold">News from {{ news.id }}</div>
          <div class="overline font-italic font-weight-light mb-4 text-end">
            on {{ news.publishedOn }}
          </div>
          <v-list-item-title class="headline mb-1"
            >{{ news.name }}
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
    {{ passRes }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import NewsList from "../lib/NewsList";
import { Watch, Prop } from "vue-property-decorator";
import { newsBundle } from "../../types";
@Component({})
export default class NewsCollection extends Vue {
  private passRes: Array<string> = ["1"];
  private newsAll: Array<newsBundle> = [
    {
      title: "its tiiitle",
      content: "its conteeeeeeent",
      publisher: "its meeeee",
      publishedOn: "todaaaay",
      category: "business"
    }
  ];
  @Prop({ default: [] })
  categoryValue!: Array<string>;

  @Watch("categoryValue")
  getCategoryValue() {
    const listService = new NewsList();
    //let res = await this.listService.getNewsByCategory();
    this.passRes.push(this.categoryValue[0]);
  }
  mounted() {
    //let newsAll: any = this.listService.getNewsByCategory();
    // this.newsAll.push(a.sources);
  }
}
</script>

<style scoped>
.categoryColor {
  color: red;
}
</style>
