import {Component, EventEmitter, OnInit} from '@angular/core';
import {emitButtonPath} from "../shared/button-path";
import {Movie} from "../shared/movie-model";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

 movieClicked: boolean = false;

  type: string = 'Movies';
  navigationTitle: string = ''

  constructor() {
    emitButtonPath.subscribe((v) => {
      this.navigationTitle = v;
    });

  }
  onPress(){
    addMovieEmitter.emit(true);
  }

  ngOnInit(): void {
  }

}

export const addMovieEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
