import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  count: number = 0;
  serverName: string = 'value';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  onClickMe(){
   this.count++;
  }
  onAddServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
