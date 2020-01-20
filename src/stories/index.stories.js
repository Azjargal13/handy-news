import Vue from "vue";
import Hello from "../components/helper/Hello.vue";

export default { title: "Footer component" };

export const withText = () => "<hello>yupp, normal test</hello>";
export const asAComponent = () => ({
  components: { Hello },
  template: `<hello></hello>`
});
