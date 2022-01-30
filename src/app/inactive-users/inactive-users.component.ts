import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  constructor(private usersService: UsersService,private counterService: CounterService){}

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.incrementInacToAc();
   }
}
