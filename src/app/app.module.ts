import { BrowserModule } from '@angular/platform-browser';
import {ElementRef, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRouting} from "./app.routes";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {LoginComponent} from "./shared/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from "angular4-social-login";
import {DemoComponent} from "./demo/demo.component";
import {CustomValidators} from "./custom-validators/custom-validators";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("456433401420-is0hibqjcgru12762tnlb7rdam56http.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("561602290896109")
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    LoginComponent,
    AppComponent,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: AuthServiceConfig, useFactory: provideConfig},
    ElementRef
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
