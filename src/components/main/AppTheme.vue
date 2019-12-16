<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
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
    <!-- search component including category selection -->
    <SearchComp />
    <CategoryComp/>
    <!-- footer section -->
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        made with full of <v-icon>$heart</v-icon> in
        {{ new Date().getFullYear() }} — <strong>HandyNews</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchComp from "./SearchComp.vue";
import CategoryComp from "./CategoryComp.vue"
@Component({
  components: { SearchComp, CategoryComp }
})
export default class AppTheme extends Vue {
  constructor() {
    super();
  }

  mounted() {}
}
</script>

<style scoped></style>
