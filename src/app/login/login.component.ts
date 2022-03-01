import { Component, OnInit  } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './passwordValidator';
import { LoginService } from './login.service';

import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    // formBuilder: FormBuilder,
    // private loginService: LoginService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    // this.form = formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
    // });
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    console.log("im workding");
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  // login(){
  //   let result = this.loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
  //   if (!result){
  //     this.form.controls['password'].setErrors({
  //       invalidLogin: true
  //     });
  //   }
  //   else {
  //     console.log(this.form.value);
  //   }
  // }
  reloadPage(): void {
    window.location.reload();
  }
}

