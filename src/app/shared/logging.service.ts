import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class LoggingService{
    logToConsole(status: string){
        console.log("Status Changed:",status);
    }
}