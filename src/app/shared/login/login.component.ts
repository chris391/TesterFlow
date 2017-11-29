import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../custom-validators/custom-validators";
import {AppComponent} from "../../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FacebookLoginProvider, GoogleLoginProvider, SocialUser} from "angular4-social-login";
import {AuthService} from "angular4-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm: FormGroup;
  user: SocialUser;

  constructor(private fb: FormBuilder, private appComponent: AppComponent, private route: ActivatedRoute, private authService: AuthService){}

  ngOnInit(){
    this.authService.authState.subscribe((user) => {
        this.user = user;
        console.log(user);
      },
      err => console.log(err))

    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, CustomValidators.validateEmail])]
    });

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  exitLogin(){
    this.appComponent.exitLogin();
  }

}

