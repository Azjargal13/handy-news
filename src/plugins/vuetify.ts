import Vue from "vue";
import Vuetify, {
  VSelect,
  VFooter,
  VMenu,
  VBtn,
  VAppBar,
  VChip,
  VList,
  VListItemTitle,
  VIcon,
  VAppBarNavIcon,
  VCol,
  VContainer,
  VRow,
  VTextField
} from "vuetify/lib";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {
      search: "mdi-magnify",
      heart: "mdi-heart",
      news: "mdi-newspaper"
    }
  },
  components: {
    VSelect,
    VFooter,
    VMenu,
    VBtn,
    VAppBar,
    VChip,
    VList,
    VListItemTitle,
    VAppBarNavIcon,
    VIcon,
    VCol,
    VContainer,
    VRow,
    VTextField
  },
  theme: {
    themes: {
      light: {
        primary: "#2c3e50",
        secondary: "#757575",
        accent: "#212121",
        error: "#FF8A65"
      }
    }
  }
});
