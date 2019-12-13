<template>
  <div class="v-input">
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
          hint="You can select multiple options :)"
        >
        </v-text-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class SearchComp extends Vue {
  constructor() {
    super();
  }

  mounted() {}
}
</script>

<style scoped>
.search-outer {
  position: relative;
  top: 200px;
  color: dimgrey;
  width: 450px;
  margin: 0 auto;
}
</style>
