<template>
  <div id="app">
    <v-app>
      <ToolbarComp />
      <router-view></router-view>
      <!-- <FooterComp /> -->
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ToolbarComp from "./components/main/ToolbarComp.vue";
import FooterComp from "./components/main/FooterComp.vue";

@Component({
  components: {
    ToolbarComp,
    FooterComp
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
