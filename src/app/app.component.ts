import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  statusProject: Array<any> = ['Stable', 'Critical', 'Finished'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Test'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbbidenEmails),
      'projectStatus': new FormControl(null, [Validators.required])
    });

    this.signUpForm.patchValue({
      'projectStatus': 'Stable'
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  // @ts-ignore
  forbbidenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return  promise;
  }

}
