import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../shared/login/login.component";

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor(private login: LoginComponent) { }

  ngOnInit() {
  }

  isLogged(){
    return this.login.displayLogin;
  }

}
