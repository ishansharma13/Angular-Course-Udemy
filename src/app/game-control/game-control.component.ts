import { Component, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberIncremented = new EventEmitter<{num: number}>();
  num: number = 0;
  interval;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    this.interval = setInterval(()=>{
      this.num++;
      this.numberIncremented.emit({num: this.num});
    },1000);
  }
  onStopGame(){
    clearInterval(this.interval);
  }
}
