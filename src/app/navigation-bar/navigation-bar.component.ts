import {Component, EventEmitter, OnInit} from '@angular/core';
import {emitButtonPath} from "../shared/button-path";

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
      this.navigationTitle = "Add "  + v[0] + v.substring(1, v.length).toLowerCase();
    });

  }
   onPress(){
    addMovieEmitter.emit(true);
  }

  ngOnInit(): void {
  }

}

export const addMovieEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
