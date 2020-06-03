import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeUsers: string[] = [];
  inactiveUsers: string[] = []
  constructor(
    private userSvc: UserService
  ) {
  }

  ngOnInit() {
    this.activeUsers = this.userSvc.activeUsers;
    this.inactiveUsers = this.userSvc.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.userSvc.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.userSvc.setToActive(id);
  }
}
