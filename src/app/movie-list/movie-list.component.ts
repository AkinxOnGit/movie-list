import {Component, EventEmitter, Input, OnInit, Sanitizer} from '@angular/core';
import {Movie} from "../shared/movie-model";
import {ButtonPath, emitButtonPath} from "../shared/button-path";
import {MovieService} from "../service/movie.service";
import {addMovieEmitter} from "../navigation-bar/navigation-bar.component";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  showForm: boolean = false;

  constructor(private movieService: MovieService, private sanitizer: DomSanitizer) {
    setTimeout(() => {
      emitButtonPath.emit(ButtonPath.Movie);
      this.movieFormPopUp();
    }, -1);
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
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
    })
  }

  onDeleteMovie(id: number){
    this.movieService.deleteMovie(id).subscribe(_ => {
      this.movies = this.movies.filter(movie => movie.id != id)
    })
  }

}
