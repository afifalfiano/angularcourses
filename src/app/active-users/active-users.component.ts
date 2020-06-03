import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  // @Input() users: string[];
  users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(
    private userSvc: UserService
  ) {

  }

  ngOnInit(){
    this.users = this.userSvc.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    // @ts-ignore
    this.userSvc.setToInactive(id);
    // this.userSvc.userSetToInactive.emit(id);
  }
}
