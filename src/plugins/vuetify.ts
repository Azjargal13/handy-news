import Vue from "vue";
import Vuetify from "vuetify/lib";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {
      search: "mdi-magnify",
      heart: "mdi-heart",
      news: "mdi-newspaper",
      event: "mdi-calendar",
      bmark: "mdi-bookmark-check"
    }
  },
  theme: {
    themes: {
      light: {
        primary: "#2c3e50",
        secondary: "#424242",
        accent: "#212121",
        error: "#FF8A65"
      }
    }
  }
});
