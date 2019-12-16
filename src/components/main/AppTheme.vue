<template>
  <div>
    <v-app>
      <v-app-bar color="secondary" dark>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>$heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>$search</v-icon>
        </v-btn>
      </v-app-bar>
      <!-- search/input section -->
      <SearchComp />
      <!-- keep footer -->
      <FooterComp />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchComp from "./SearchComp.vue";
import FooterComp from "./FooterComp.vue";

@Component({
  components: { SearchComp, FooterComp }
})
export default class AppTheme extends Vue {
  constructor() {
    super();
  }
  private onScroll(e: any) {
    e.target.scrollTop;
  }
  mounted() {}
}
</script>

<style scoped></style>
