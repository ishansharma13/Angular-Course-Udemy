import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: string = 'even';
  num: number = 0;
  onNumberIncremented(eventData:{num:number}){
    this.num = eventData.num;
    if(eventData.num%2 === 0){
      this.value = 'even';
    }else{
      this.value = 'odd';
    }

  }
}
