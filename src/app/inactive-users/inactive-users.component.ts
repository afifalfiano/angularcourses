import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  // @Input() users: string[];
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(
    private userSvc: UserService
  ) {
  }

  ngOnInit() {
    this.users = this.userSvc.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    // @ts-ignore
    this.userSvc.setToActive(id);
    // this.userSvc.userSetToActive.emit(id);
  }
}
