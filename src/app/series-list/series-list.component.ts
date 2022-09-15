import {Component, OnInit} from '@angular/core';
import {Movie} from "../shared/movie-model";
import {ButtonPath, emitButtonPath} from "../shared/button-path";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Movie[] = [];

  constructor() {
    setTimeout(() => {
      emitButtonPath.emit(ButtonPath.Series);
    }, -1);
  }

  ngOnInit(): void {
  }

}
