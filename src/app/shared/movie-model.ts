import {SafeUrl} from "@angular/platform-browser";

export class Movie{
  public id: number;
  public title: string;
  public year: number;
  public poster: string;
  public genre: string;
  public image: string;
  public realImage: SafeUrl | undefined;


  constructor(id: number, title: string, year: number, poster: string, genre: string, image: string) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.poster = poster;
    this.genre = genre;
    this.image = image;
  }
}
