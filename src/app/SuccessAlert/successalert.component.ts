import {Component} from '@angular/core';


@Component({
  selector: 'app-success-alert',
  template: `
    <p class='success'>This is Success Alert</p>
  `,
  styles: [`
    .success{
      color:forestgreen;
    }
  `]
})
// tslint:disable-next-line:component-class-suffix
export class SuccessAlert{

}
