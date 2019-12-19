import Vue from "vue";
import Component from "vue-class-component";
import APIKey from "./NewsAPIK";
interface newsBundle {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}
@Component({})
// service to get NewsAPI list
export default class NewsList extends Vue {
  private lang: string = "language=en";
  private bySourceUrl: string = "https://newsapi.org/v2/sources?";
  private apiK: string = "apiKey=";
  private secToken = new APIKey();
  private fullUrl: string =
    this.bySourceUrl +
    this.lang +
    "&category=business&" +
    this.apiK +
    this.secToken.key;

  async getNewsByCategory() {
    const result = await fetch(this.fullUrl);
    if (result.ok) {
      const data: Array<newsBundle> = await result.json();
      return data;
    } else {
      throw new Error(result.statusText);
    }
  }
}
