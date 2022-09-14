import { Injectable } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Movie} from "../shared/movie-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(http: HttpClientModule) { }

  }
