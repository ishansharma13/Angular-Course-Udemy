import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'first-app';
  disabled: boolean = false;
  onClickButton(){
    this.name = '';
    this.disabled = true;
  }
  onInputChange(){  
    this.disabled = this.name.length>0?false:true;
  }
}
