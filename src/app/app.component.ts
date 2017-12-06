import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginComponent} from "./shared/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayLogin = false;

  constructor(private route: Router){}

  enterLogin(){
    // this.route.navigateByUrl('home/login')
    this.displayLogin = true;
  }
  exitLogin(){
    this.displayLogin = false;
  }
  isUserLoggedIn(){
    return localStorage.getItem('currentUser');
  }
}
