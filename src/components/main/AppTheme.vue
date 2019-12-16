<template>
  <div>
    <v-app>
      <v-app-bar color="deep-grey accent-4" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>$heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>$search</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
