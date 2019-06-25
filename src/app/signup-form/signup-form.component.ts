import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupFormValidators } from './signup-form.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        SignupFormValidators.cannotContainSpace,

        ], SignupFormValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required)
    })

  });

  handleLogin() {
    // const isValid = authService(this.form.value);
    const isValid = false;
    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  } 

  get username() {
    return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');
  }
}
