import {SafeUrl} from "@angular/platform-browser";
import {ShowType} from "./show-type";

export class Show {
  public id: number;
  public title: string;
  public year: number;
  public poster: string;
  public genre: string;
  public image: string;
  public realImage: SafeUrl | undefined;
  public showType: ShowType;


  constructor(id: number, title: string, year: number, poster: string, genre: string, image: string, showType: ShowType) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.poster = poster;
    this.genre = genre;
    this.image = image;
    this.showType = showType;
  }
}
