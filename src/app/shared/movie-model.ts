export class Movie{
  public title: string;
  public year: number;
  public poster: string
  public genre: string

  constructor(title: string, year: number, poster: string, genre: string){
    this.title= title;
    this.year = year;
    this.poster = poster;
    this.genre = genre;
  }
}
