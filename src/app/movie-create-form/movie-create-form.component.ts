import {Component, Input, OnInit} from '@angular/core';
import {addMovieEmitter} from "../navigation-bar/navigation-bar.component";
import {ShowService} from "../service/show.service";
import {Show} from "../shared/show-model";
import {DomSanitizer} from "@angular/platform-browser";
import {ShowType} from "../shared/show-type";

@Component({
  selector: 'app-movie-create-form',
  templateUrl: './movie-create-form.component.html',
  styleUrls: ['./movie-create-form.component.css']
})
export class MovieCreateFormComponent implements OnInit {

  @Input() movieList : Show[] = []
  showType: ShowType = ShowType.movie
  title: string = "";
  year: number = 2000;
  genre: string = "";
  image: File | undefined;
  popUpIsOpen: boolean = true;
  editContainer: string = 'editContainer';

  constructor(private showService: ShowService, private sanitizer: DomSanitizer) {
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
    this.popUpIsOpen = true;
  }

  onImageSelected(event: Event) {
    let target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
      this.image = target.files[0];
    }
  }

  createMovie() {
      if (this.image) {
        this.showService.createShow(this.title, this.genre, this.year, this.showType).subscribe(movie => {
          this.showService.addImageToShow(movie.id, this.image!!).subscribe(movie2 => {
            let objUrl = 'data:image/png;base64,' + movie2.image
            movie2.realImage = this.sanitizer.bypassSecurityTrustUrl(objUrl)
            this.movieList.push(movie2)
            addMovieEmitter.emit(false);
          })
        })
    }
  }
  onClick(event: Event){
    const isPopUp: boolean = event.composedPath()[0] === document.getElementsByClassName(this.editContainer)[0];
    if(!isPopUp) {
      addMovieEmitter.emit(false);
    }

  }
}
