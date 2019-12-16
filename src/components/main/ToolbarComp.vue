<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class ToolbarComp extends Vue {
  constructor() {
    super();
  }

  mounted() {}
}
</script>

<style scoped></style>
