import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {DemoComponent} from "./demo/demo.component";
import {LoggedComponent} from "./logged/logged.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginComponent} from "./shared/login/login.component";
import {TestsComponent} from "./tests/tests.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'logged', component: LoggedComponent, canActivate: [AuthGuard]},
  {path: 'tests', component: TestsComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting{}

