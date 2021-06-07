import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  // template: '' +
  //   '<app-server></app-server>\n' +
  //   '<app-server></app-server>\n',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;},2000)
  }

  ngOnInit(): void {
  }

}

