import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export class NewsList extends Vue {
  constructor() {
    super();
  }
  private newsList: Array<String> = [];

  mounted() {}
}
