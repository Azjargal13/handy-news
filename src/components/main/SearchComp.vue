<template>
  <div class="v-input">
    <v-container id="scroll-target" class="overflow-y-auto">
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1000px"
      >
        <div class="search-outer">
          <div class="search-text">
            <v-text-field
              placeholder="Search anything..."
              rounded="true"
              id="search"
              height="60"
              outlined
              class="search"
              append-icon="$search"
              hint="You can select multiple sources :)"
              aria-autocomplete="list"
              v-model="searchText"
              @input="filterInputSearch"
            >
            </v-text-field>
            <!-- Initial choices-->
            <div v-show="initShowSrc">
              <h2>News sources you can select from</h2>
              <v-chip v-for="src in newsSrc" :key="src.id" class="selectedSrc">
                {{ src }}
              </v-chip>
            </div>
            <!-- After selecting choices-->
            <div v-show="!initShowSrc">
              <h2>Matching news sources from search input:</h2>
              <v-chip
                v-for="src in filteredSrc"
                :key="src.id"
                class="selectedSrc"
                @click="selectedSrc(src)"
              >
                {{ src }}
              </v-chip>
            </div>
            <div v-show="showSelected">
              <h3>Your selected news sources are</h3>
              <h4
                v-for="src in selectedNewsSrc"
                :key="src.id"
                class="selectedNewsSrc"
              >
                {{ src }}
              </h4>
            </div>
            <CategoryComp />
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CategoryComp from "./CategoryComp.vue";

@Component({
  components: { CategoryComp }
})
export default class SearchComp extends Vue {
  private searchText: string = "";
  private filteredSrc: Array<string> = [];
  private initShowSrc: boolean = true;
  private showSelected: boolean = false;
  private selectedNewsSrc: Array<string> = [];
  private newsSrc: Array<string> = [
    "ikon",
    "gogo.mn",
    "business.mn",
    "Quarts.com",
    "BBC",
    "unread.today",
    "techCrunch",
    "reuters",
    "NHK",
    "JapanPost",
    "Times",
    "AsahiShinbun",
    "FoxNews",
    "The Guardian"
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
      this.filteredSrc = this.newsSrc.filter(newsSite => {
        return newsSite.toLowerCase().includes(this.searchText.toLowerCase());
      });
      return this.filteredSrc;
    }
  }
  private selectedSrc(src: any) {
    this.showSelected = true;
    // src should be existed only once
    if (!this.selectedNewsSrc.includes(src)) {
      this.selectedNewsSrc.push(src);
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
  margin: 0 auto;
}
.selectedSrc {
  margin: 5px 10px 5px auto;
}
.selectedNewsSrc {
  color: gray;
  margin: 5px auto;
}
</style>
