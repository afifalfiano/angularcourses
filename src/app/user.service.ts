import {EventEmitter, Injectable} from '@angular/core';
import {CounterService} from './counter.service';


@Injectable({providedIn: 'root'})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  //
  // userSetToActive = new EventEmitter<{number}>();
  // userSetToInactive = new EventEmitter<{number}>();
  constructor(
    private counterSvc: CounterService
  ) {
  }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterSvc.incrementInactiveToActive();
  }

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterSvc.incrementActiveToInactive();
  }

}
