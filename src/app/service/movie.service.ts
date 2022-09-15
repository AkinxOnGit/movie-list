import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Movie} from "../shared/movie-model";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  createMovie(title: string, genre: string, year: number) {
    let json = {
      "title": title,
      "genre": genre,
      "year": year
    };
    return this.httpClient.post<Movie>(this.baseUrl + "/movie/create", json);
  }

  addImageToMovie(id: number, image: File) {
    const formData = new FormData();
    formData.append("image", image);
    return this.httpClient.put<Movie>(this.baseUrl + "/movie/" + id + "/add-image", formData);
  }

  getMovies() {
    return this.httpClient.get<Movie[]>(this.baseUrl + "/movie/all")
  }

}
