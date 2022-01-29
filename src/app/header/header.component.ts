import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() navLinkClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(navLink: string){
    this.navLinkClicked.emit(navLink);
  }
}
