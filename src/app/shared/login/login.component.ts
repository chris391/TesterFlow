import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../custom-validators/custom-validators";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm: FormGroup;
  constructor(private fb: FormBuilder, private appComponent: AppComponent){}

  ngOnInit(){
    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, CustomValidators.validateEmail])]
    })
  }
  exitLogin(){
    this.appComponent.exitLogin();
  }

}

