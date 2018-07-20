import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() clientName: object
  @Output() displayClinet = new EventEmitter()
  status = "offline";

  constructor() { }

  ngOnInit() {

  }
  
  showStatus() {
    this.status = "online";
    this.displayClinet.emit(this.clientName);
    this.status = "Server Status";
  }

}
