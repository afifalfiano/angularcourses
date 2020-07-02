import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('register', {static: true}) formRegister: NgForm;
  defaultSubscription = 'advanced';
  registerUser = {
    email: '',
    subscription: '',
    userPassword: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.registerUser.email =  this.formRegister.value.email;
    this.registerUser.subscription = this.formRegister.value.subscription;
    this.registerUser.userPassword = this.formRegister.value.userPassword;

    this.formRegister.reset();
  }
}
