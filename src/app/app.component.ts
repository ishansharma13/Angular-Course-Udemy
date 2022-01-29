import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkClicked: string = 'all';
  name = 'first-app';

  onLinkClickListener(eventData: string){
    this.linkClicked = eventData;
  }
}
