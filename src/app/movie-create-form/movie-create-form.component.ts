import {Component, Input, OnInit} from '@angular/core';
import {addMovieEmitter} from "../navigation-bar/navigation-bar.component";
import {emitButtonPath} from "../shared/button-path";
import {MovieService} from "../service/movie.service";
import {Movie} from "../shared/movie-model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-create-form',
  templateUrl: './movie-create-form.component.html',
  styleUrls: ['./movie-create-form.component.css']
})
export class MovieCreateFormComponent implements OnInit {

  @Input() movieList : Movie[] = []
  title: string = "";
  year: number = 2000;
  genre: string = "";
  image: File | undefined;

  constructor(private movieService: MovieService, private sanitizer: DomSanitizer) {
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
        this.movieService.addImageToMovie(movie.id, this.image!!).subscribe(movie2 => {
          let objUrl = 'data:image/png;base64,' + movie2.image
          movie2.realImage = this.sanitizer.bypassSecurityTrustUrl(objUrl)
          this.movieList.push(movie2)
          addMovieEmitter.emit(false);
        })
      })
    }
  }
}
