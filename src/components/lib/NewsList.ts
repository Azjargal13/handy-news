import Vue from "vue";
import Component from "vue-class-component";

@Component({
  template: require("feature.html")
})
export class FeatureComponent extends Vue {
  constructor() {
    super();
  }
  private newsList: Array<String> = [];

  mounted() {}
}
