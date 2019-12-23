<template>
  <div>
    <v-col class="mb-6 pa-0" cols="12" lg="6">
      <v-menu
        v-model="dateSelect"
        :close-on-content-click="false"
        :nudge-right="50"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            prepend-icon="$event"
            readonly
            v-on="on"
            hint="You can select the date news published :)"
            persistent-hint
          >
          </v-text-field>
        </template>
        <v-date-picker v-model="date" @input="passDate"></v-date-picker>
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

  private passDate() {
    this.$emit("passDate", this.date);
    this.dateSelect = false;
  }
  mounted() {}
}
</script>

<style scoped></style>
