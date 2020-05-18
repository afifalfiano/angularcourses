import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  textDetails = 'Salmon';
  logDetails = ['salmon', 'shark', 'monkey', 'elephant', 'cat'];

  displayDetails(){
    this.showDetails = true;
    // tslint:disable-next-line:no-unused-expression
    this.textDetails;
    this.logDetails.push(this.textDetails);

  }

  getColor() {
    return this.showDetails === true ? 'blue' : 'green';
  }

}
