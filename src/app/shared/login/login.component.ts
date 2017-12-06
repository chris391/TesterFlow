import {Component, ElementRef, forwardRef, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../custom-validators/custom-validators";
import {AppComponent} from "../../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FacebookLoginProvider, GoogleLoginProvider, SocialUser} from "angular4-social-login";
import {AuthService} from "angular4-social-login";

@Component({
  selector: 'app-login',
  // host: {'(document:click)': 'handleClick($event)'},
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm: FormGroup;
  user: SocialUser;
  elementRef;
  displayLogin = false;

  constructor(private fb: FormBuilder, private appComponent: AppComponent, private router: Router, private route: ActivatedRoute,
              private authService: AuthService,
              // private myElement: ElementRef
  ){
    // this.elementRef = myElement;

  }

  ngOnInit(){
    this.authService.authState.subscribe(user => {
      this.user = user;
      if (user !== null){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.appComponent.exitLogin();
      }

    });

    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, CustomValidators.validateEmail])],
      password: ['', Validators.compose([Validators.required])]
    });

  }

  //FIXME set displayLogin to false in AppComponent if user clicks outside LoginComponent
  handleClick(event){
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if(inside){
      console.log('inside');
    }else{
      console.log('outside');
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem("currentUser");
  }

  exitLogin(){
    this.appComponent.exitLogin();
    localStorage.removeItem("currentUser");
  }

}
