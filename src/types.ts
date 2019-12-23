export interface newsBundle {
  source: { name: string };
  title: string;
  content: string;
  publishedAt: string;
  description: string;
  url: string;
  urlToImage: string;
}

export interface newsItem {
  name: string;
  id: string;
}

export interface selectValues {
  category: Array<string>;
  newsSrc: Array<newsItem>;
  date: string;
}
