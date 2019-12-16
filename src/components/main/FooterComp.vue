<template>
  <div>
    <v-footer absolute class="font-weight-medium secondary">
      <v-col class="text-center" cols="12">
        made with full of <v-icon>$heart</v-icon> in
        {{ new Date().getFullYear() }} — <strong>HandyNews</strong>
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

<style scoped></style>
