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
  private cntry: string = "country=us";
  private byTopHeadlineUrl: string = "https://newsapi.org/v2/top-headlines?";
  private apiK: string = "apiKey=";
  private secToken = new APIKey();
  private fullUrl: string =
    this.byTopHeadlineUrl +
    this.cntry +
    // this.lang +
    "&category=business&" +
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

  // used for fetching news by everything endpoint
  private byAllUrl: string = "https://newsapi.org/v2/everything?";
  private fullAllUrl: string =
    this.byAllUrl +
    this.lang +
    "&from=2019-12-20&" +
    this.selectedAll[0].date +
    "sources=bbc-news,cnn" +
    this.selectedCategory +
    "&" +
    this.apiK +
    this.secToken.key;

  // fetch news by headlines
  // currently it is fetching country=us all business related news
  // can be either sources or category not both!
  async getNewsByTopHeadlines() {
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
  // good to perform query using 'everything' endpoint
  async getEverything(category: Array<selectValues>) {
    this.selectedAll = category;
    console.log("hey its selectedall", this.selectedAll[0].date);
    console.log(this.fullAllUrl);
    this.selectedCategory = this.selectedAll[0].newsSrc.join();
    // this.selectedAll[0].newsSrc.map(id =>)
    // this.selectedCategory = this.selectedAll[0].newsSrc
    const result = await fetch(this.fullAllUrl);
    if (result.ok) {
      const data: Array<string> = await result.json();
      return data;
    } else {
      throw new Error(result.statusText);
    }
  }
}
