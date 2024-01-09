import {Component, EventEmitter, OnInit} from '@angular/core';
import {emitButtonPath} from "../shared/button-path";
import {PopupService} from "../service/popup.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  type: string = 'Movies';
  navigationTitle: string = ''

  constructor(private popupService: PopupService) {
    emitButtonPath.subscribe((v) => {
      this.navigationTitle = "Add "  + v[0] + v.substring(1, v.length).toLowerCase();
    });

  }
   onPress(){
    this.popupService.setPopupVisibility(true);
  }

  ngOnInit(): void {
  }

}
