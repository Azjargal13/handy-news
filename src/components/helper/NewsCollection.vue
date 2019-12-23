<template>
  <div class="d-md-flex flex-wrap mb-12">
    <!-- in cicle logo shows news source -->
    <v-card
      class="mx-5 my-5"
      max-width="375"
      style="text-align:left"
      v-for="news in filteredNews"
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
        <div>
          <img
            :src="news.urlToImage"
            alt="img"
            style="max-width:350px; max-height:300px "
            class="mx-3 my-auto"
          />
        </div>
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
          | category |
        </p>
        <v-spacer></v-spacer>
        <!-- hide button close the card -->
        <!-- when card closed, remaining cards position will be changed -->
        <v-btn text>Hide </v-btn>
        <!-- read more button open url to another tab -->
        <v-btn text @click="readMore(news.url)">Read more</v-btn>
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
import { newsBundle, selectValues, newsItem } from "../../types";
@Component({})
export default class NewsCollection extends Vue {
  private newsAll: Array<newsBundle> = [];
  private newsSources: Array<string> = [];
  private filteredNews: Array<newsBundle> = [];
  private newsSrc: Array<newsItem> = [
    { name: "Bbc.com", id: "bbc-news" },
    { name: "CNN", id: "cnn" },
    { name: "TechCrunch", id: "techcrunch" },
    { name: "TechRadar", id: "tech-radar" },
    { name: "Reuters", id: "reuters" },
    { name: "FoxNews", id: "fox-news" },
    { name: "Bloomberg", id: "bloomberg" },
    { name: "Business Insider", id: "business-insider" },
    { name: "Financial Post", id: "financial-post" },
    { name: "CNBC", id: "cnbc" },
    { name: "Fortune", id: "fortune" },
    { name: "The Wall Street Journal", id: "the-wall-street-journal" },
    { name: "New Scientist", id: "new-scientist" },
    { name: "Next Big Future", id: "next-big-future" },
    { name: "Hacker News", id: "hacker-news" },
    { name: "Crypto Coins News", id: "crypto-coins-news" },
    { name: "The Verge", id: "the-verge" },
    { name: "Medical News Today", id: "medical-news-today" },
    { name: "Wired", id: "wired" },
    { name: "Associated Press", id: "associated-press" },
    { name: "The Washington Post", id: "the-washington-pos" },
    { name: "The Huffington Post", id: "the-huffington-post" },
    { name: "The New York Times", id: "the-new-york-times" },
    { name: "National Geographic", id: "national-geographic" },
    { name: "Space.com", id: "space.com" },
    { name: "Forbes.com", id: "forbes.com" }
  ];
  @Prop({ default: [] })
  categoryValue!: Array<string>;

  @Prop({ default: [] })
  selectedValues!: Array<selectValues>;

  async mounted() {
    // shows news by category
    const listService = new NewsList();
    // need to pass category correctly
    let newsAll: any = await listService.getByTopHeadlines();
    //let newsSources: any = await listService.getNewsBySources();
    this.newsAll = newsAll.articles;
    let totalArticles = newsAll.totalResults;
    // need to be finished ...
    // if (totalArticles > 20) {
    //   let times = Math.ceil(totalArticles / 20);
    //   console.log(times + " times goin to send req");
    //   for (let index = 1; index <= times; index++) {
    //     let newsAll: any = await listService.getByTopHeadlines();
    //     this.newsAll.push(newsAll.articles);
    //     //this.filterNews(this.newsAll);
    //   }
    // }
    // send request some time based on totalArticles/20

    this.filterNews(this.newsAll);

    // want to show only selected source based on its category!
  }
  // filter out news based on our news sources
  private filterNews(allNews: Array<newsBundle>) {
    allNews.forEach(element => {
      if (this.newsSrc.find(elem => elem.name === element.source.name)) {
        this.filteredNews.push(element);
        console.log("this is included", element.source.name);
      }
    });
  }
  private readMore(url: string) {
    window.open(url, "_blank");
  }
  private hideCard() {}
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
.card {
  display: none;
}
</style>
