<template>
  <div>
    <v-col cols="10" sm="4" md="5">
      <v-menu
        v-model="dateSelect"
        :close-on-content-click="false"
        :nudge-right="50"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-text-field v-model="date" prepend-icon="$event" readonly v-on="on">
          </v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="dateSelect = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class DatePickerComp extends Vue {
  constructor() {
    super();
  }
  private date: string = new Date().toISOString().substr(0, 10);
  private dateSelect: boolean = false;
  mounted() {}
}
</script>

<style scoped></style>
