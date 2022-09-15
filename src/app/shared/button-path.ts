import {EventEmitter} from "@angular/core";

export enum ButtonPath {
  Movie = "Add Movie",
  Series = "Add Series",
  Anime = "Add Anime"
}
export const emitButtonPath: EventEmitter<ButtonPath> = new EventEmitter<ButtonPath>();



