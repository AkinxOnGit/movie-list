import {Component, OnInit} from '@angular/core';
import {Show} from "../shared/show-model";
import {emitButtonPath} from "../shared/button-path";
import {ShowService} from "../service/show.service";
import {addMovieEmitter} from "../navigation-bar/navigation-bar.component";
import {DomSanitizer} from "@angular/platform-browser";
import {ShowType} from "../shared/show-type";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Show[] = [];
  showForm: boolean = false;
  showType: ShowType = ShowType.movie;

  constructor(private movieService: ShowService, private sanitizer: DomSanitizer) {
    setTimeout(() => {
      this.movieFormPopUp();
    }, -1);
  }

  ngOnInit(): void {
    switch (window.location.href.split('homepage/')[1]){
      case 'movies':
        this.showType = ShowType.movie;
        break;
      case 'series':
        this.showType = ShowType.series;
        break;
      case 'anime':
        this.showType = ShowType.anime;
        break;
    }
    emitButtonPath.emit(this.showType);
    this.movieService.getShows(this.showType).subscribe(movies => {
      this.movies = movies
      movies.map(movie => {
        let objUrl = 'data:image/png;base64,' + movie.image
        movie.realImage = this.sanitizer.bypassSecurityTrustUrl(objUrl);
      })
      console.log(this.movies)
    })
  }

  movieFormPopUp(){
    addMovieEmitter.subscribe(v =>{
      this.showForm = v;
      console.log(v);
    })
  }

  onDeleteMovie(id: number){
    this.movieService.deleteShow(id).subscribe(_ => {
      this.movies = this.movies.filter(movie => movie.id != id)
    })
  }
  onPressEdit(){
    addMovieEmitter.emit(true);
  }
}
