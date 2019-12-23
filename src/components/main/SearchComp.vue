<template>
  <div class="v-input">
    <v-container id="scroll-target" class="overflow-y-auto">
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        class="containerScroll"
      >
        <div class="search-outer mx-0 my-auto">
          <div class="search-text">
            <!-- due to scrolling search box is moving up & up -->
            <!-- need to keep its position fixed -->
            <v-text-field
              placeholder="Search anything..."
              rounded="true"
              id="search"
              height="60"
              outlined
              class="pa-0 mt-12"
              append-icon="$search"
              hint="You can select multiple sources :)"
              aria-autocomplete="list"
              v-model="searchText"
              @input="filterInputSearch"
            >
            </v-text-field>
            <!-- Initial choices-->
            <div v-show="initShowSrc" class="mb-10">
              <h2>News sources you can select from</h2>
              <!-- shuffle and show only 15 sources -->
              <!-- or can have their imgs -->
              <v-chip v-for="src in newsSrc" :key="src.id" class="selectedSrc">
                {{ src.name }}
              </v-chip>
            </div>
            <!-- After selecting choices-->
            <div v-show="!initShowSrc">
              <h2>Matching news sources from search input:</h2>
              <!-- <h4 > {{msg}} </h4> -->
              <v-chip
                v-for="src in filteredSrc"
                :key="src.id"
                class="selectedSrc"
                @click="selectedSrc(src)"
              >
                {{ src.name }}
              </v-chip>

              <!-- <span v-show="alreadySelectedSrc">
                its already selected
              </span> -->
              <!-- <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Left</v-btn>
                </template>
                <span>Left tooltip</span>
              </v-tooltip> -->
            </div>
            <div v-show="showSelected" class="mx-auto mb-4">
              <h3>Your selected news sources are</h3>
              <h4
                v-for="src in selectedNewsSrc"
                :key="src.id"
                class="selectedNewsSrc mx-8 my-0.5 font-weight-bold"
              >
                {{ src.name }}
              </h4>
            </div>
            <CategoryComp
              v-show="hideCategory"
              :selectedSrc="selectedNewsSrc"
            />
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CategoryComp from "./CategoryComp.vue";
import { newsItem } from "../../types";

@Component({
  components: { CategoryComp }
})
export default class SearchComp extends Vue {
  private searchText: string = "";
  private filteredSrc: Array<newsItem> = [];
  private initShowSrc: boolean = true;
  private showSelected: boolean = false;
  private selectedNewsSrc: Array<newsItem> = [];
  private alreadySelectedSrc: boolean = false;
  private hideCategory: boolean = false;
  private msg: string = "Sorry, could not find :(";
  private showMsg: boolean = false;
  private newsSrc: Array<newsItem> = [
    { name: "BBC", id: "bbc-news" },
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
    { name: "Space.com", id: "space.com" }

    // "ikon",
    // "gogo.mn",
    // "business.mn",
    // "Quarts.com",
    // "unread.today",
    // "NHK",
    // "JapanPost",
    // "AsahiShinbun",
  ];
  constructor() {
    super();
  }
  // search box shows list of inputs based on given string
  // from list we can choose multiple options
  // selected multiple options could be seen as v-chips

  // after showing v-chips, we can select category of the news
  // that is dropdown menu

  // if selected something which is not in arr, then says no sources is available now

  private filterInputSearch() {
    if (this.searchText.length < 1) {
      this.initShowSrc = true;
      //this.showSelected = false;
    } else {
      this.initShowSrc = false;
      this.showMsg = false;
      this.filteredSrc = this.newsSrc.filter(newsSite => {
        return newsSite.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
      return this.filteredSrc;
    }
    // some statement need to be exist here!
  }
  // check selected source should be existed in arr only
  private selectedSrc(src: any) {
    this.showSelected = true;
    this.hideCategory = true;
    // src should be existed only once
    if (!this.selectedNewsSrc.includes(src)) {
      this.alreadySelectedSrc = false;
      this.selectedNewsSrc.push(src);
    } else {
      this.alreadySelectedSrc = true;
    }
    // when its again selecting, arr must be start from []
  }
  private onScroll(e: any) {
    e.target.scrollTop;
  }
  mounted() {}
}
</script>

<style scoped>
.search-outer {
  position: relative;
  color: dimgrey;
  width: 450px;
}
.selectedSrc {
  margin: 5px 10px 5px auto;
}
.selectedNewsSrc {
  color: #212121;
}
.containerScroll {
  max-height: 1000px;
}
.v-input {
  padding: 10px;
}
</style>
