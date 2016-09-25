import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<ul>
            <li *ngFor= "let item of list" (click)="select(item)"><h3>{{item}}</h3></li>
            </ul>
            <br>
            <h4>Click on a list item to select<h4>
            <h3 *ngIf="selected">You selected: {{selected}}</h3>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  list = ["first",
          "second",
          "third",
          "fourth",
          "fifth"
          ];
  
  selected;
  
  select(item) {this.selected = item;}
  
}
