import {Component} from '@angular/core';


@Component({
  selector: 'app-warning-alert',
  template: `
    <p class='warning'>This is Warning Alert</p>
  `,
  styles: [`
    .warning{
      color:orange;
    }
  `]
})
// tslint:disable-next-line:component-class-suffix
export class WarningAlertComponent {
}
