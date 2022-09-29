import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Show} from "../shared/show-model";
import {Observable} from "rxjs";
import {ShowType} from "../shared/show-type";

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  baseUrl = "http://localhost:8080/show"

  constructor(private httpClient: HttpClient) { }

  createShow(title: string, genre: string, year: number, showType: ShowType) {
    let json = {
      "title" : title,
      "genre" : genre,
      "year" : year,
      "showType" : showType
    }
    console.log("tests")
    return this.httpClient.post<Show>(this.baseUrl + "/create", json);
  }

  addImageToShow(id: number, image: File) {
    const formData = new FormData();
    formData.append("image", image);
    return this.httpClient.put<Show>(this.baseUrl + "/" +id + "/add-image", formData);
  }

  getShows(showType: ShowType): Observable<Show[]> {
    return this.httpClient.get<Show[]>(this.baseUrl + "/all?type=" + showType);
  }

  deleteShow(id: number){
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }
}
