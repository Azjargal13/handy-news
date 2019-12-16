<template>
  <div>
    <!-- search/input section -->
    <SearchComp />
    <!-- keep footer -->
    <!-- <FooterComp /> -->
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
  mounted() {}
}
</script>

<style scoped></style>
