import Vue from "vue";
import Component from "vue-class-component";
import APIKey from "./NewsAPIK";
import { newsItem, selectValues } from "../../types";

@Component({})
// service to get NewsAPI list
export default class NewsList extends Vue {
  private selectedCategory: string = "";
  private selectedAll: Array<selectValues> = [
    {
      date: "",
      newsSrc: [
        {
          name: "",
          id: ""
        }
      ],
      category: []
    }
  ];
  // used for top-headline news fetching
  private lang: string = "language=en";
  private country: string = "country=us";
  private category: string = "category=business";
  private byUrl: string = "https://newsapi.org/v2/top-headlines?";
  private apiK: string = "apiKey=";
  private secToken = new APIKey();
  private fullUrl: string =
    this.byUrl +
    this.country +
    "&" +
    this.category +
    "&page=1&" +
    this.apiK +
    this.secToken.key;

  // used for fetching news by sources
  private bySourceUrl: string = "https://newsapi.org/v2/sources?";
  private fullSourceUrl: string =
    this.bySourceUrl +
    this.lang +
    "&category=general&" +
    this.apiK +
    this.secToken.key;

  // fetch news by headlines
  // currently it is fetching country=us all business related news
  // can be either sources or category not both!
  async getByTopHeadlines() {
    const result = await fetch(this.fullUrl);
    if (result.ok) {
      const data: Array<string> = await result.json();
      return data;
    } else {
      throw new Error(result.statusText);
    }
  }
  // fetch news by its by category
  async getNewsBySources() {
    const result = await fetch(this.fullSourceUrl);
    if (result.ok) {
      const data: Array<string> = await result.json();
      return data;
    } else {
      throw new Error(result.statusText);
    }
  }
  // or based on sources we can get latest news
}
