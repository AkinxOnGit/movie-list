import {Component, OnInit} from '@angular/core';
import {Show} from "../shared/show-model";
import {emitButtonPath} from "../shared/button-path";
import {ShowService} from "../service/show.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ShowType} from "../shared/show-type";
import {PopupService} from "../service/popup.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Show[] = [];
  showPopUp: boolean = false;
  showType: ShowType = ShowType.movie;

  constructor(private movieService: ShowService, private sanitizer: DomSanitizer, private popupService: PopupService) {
    setTimeout(() => {
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

    this.popupService.getPopupVisibility().subscribe(value => {
      this.showPopUp = value;
    });
  }

  onDeleteMovie(id: number){
    this.movieService.deleteShow(id).subscribe(_ => {
      this.movies = this.movies.filter(movie => movie.id != id)
    })
  }
}
