<template>
  <div>
    <v-footer
      absolute
      class="font-weight-medium footer pa-0 "
      color="secondary"
    >
      <v-col class="text-center grey--text" cols="12">
        made with full of <v-icon color="grey">$heart</v-icon> in
        {{ new Date().getFullYear() }} —
        <strong class="white--text">HandyNews</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class FooterComp extends Vue {
  constructor() {
    super();
  }

  mounted() {}
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px; /* Height of the footer */
}
</style>
