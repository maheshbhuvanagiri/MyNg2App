import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  templateUrl: './warning-alert.component.html',
  //styleUrls: ['./warning-alert.component.css']
  styles: [`
  h3 {
    color:yellow
  }`
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
