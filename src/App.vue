<template>
  <v-content>
    <HelloWorld />
    <NewsSourceComponent />
  </v-content>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import NewsSourceComponent from "./components/NewsSourceComponent";
export default {
  name: "App",

  components: {
    HelloWorld,
    NewsSourceComponent
  },

  data: () => ({
    //
  })
};
</script>
