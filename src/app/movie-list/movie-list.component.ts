import { Component, OnInit } from '@angular/core';
import {Movie} from "../shared/movie-model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [
   new Movie("Batman", 2015,"https://i.pinimg.com/736x/57/f6/84/57f684b5ee74fcb03e4b270f22d72e1b.jpg", "Superhero"),
   new Movie("Herr der Ringe", 2003,"https://m.media-amazon.com/images/I/51VKKN0KZEL.jpg", "Science Fiction"),
   new Movie("Star Wars", 2019,"https://gfx.videobuster.de/archive/v/c6Tg4LfT_5BSIiALD85Y92gcz0lMkawsSUyRjA0JTJGaW1hmSUyRmpwZWclMkbYNWO7NGRjZWPmszZjtP42YjmLY9CoMC5qcGcmcj1opjAw/star-wars-episode-ix-der-aufstieg-skywalkers-blu-ray-cover.jpg", "Science Fiction"),
   new Movie("Joker", 2019,"https://m.media-amazon.com/images/I/81YdUDaMiWL._SY445_.jpg", "Psychothriller"),
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
