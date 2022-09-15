import { Component, OnInit } from '@angular/core';
import {addMovieEmitter} from "../navigation-bar/navigation-bar.component";
import {emitButtonPath} from "../shared/button-path";
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-movie-create-form',
  templateUrl: './movie-create-form.component.html',
  styleUrls: ['./movie-create-form.component.css']
})
export class MovieCreateFormComponent implements OnInit {

  title: string = "";
  year: number = 2000;
  genre: string = "";
  image: File | undefined;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  onImageSelected(event: Event) {
    let target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
      this.image = target.files[0];
    }
  }

  createMovie() {
    if (this.image) {
      this.movieService.createMovie(this.title, this.genre, this.year).subscribe(movie => {
        this.movieService.addImageToMovie(movie.id, this.image!!).subscribe(message => {

        })
      })
    }
  }
}
