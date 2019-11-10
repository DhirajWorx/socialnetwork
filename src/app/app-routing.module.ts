import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { BodyComponent } from './landing/body/body.component';
import { SignupComponent } from './landing/signup/signup.component';
import { SearchComponent } from './landing/search/search.component';

const routes: Routes = [
  { path: 'main', component: BodyComponent },
  { path: 'search', component: SearchComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
