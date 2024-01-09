import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private showPopupSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  getPopupVisibility(): Observable<boolean> {
    return this.showPopupSubject.asObservable();
  }

  setPopupVisibility(value: boolean) {
    this.showPopupSubject.next(value);
  }
}
