import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
 
  constructor(private accountsService: AccountsService){
    this.accountsService.statusChanged.subscribe((status:string)=>console.log("Came through Account Component: ",status));
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount({
      name: accountName,
      status: accountStatus
    });

  }
}
