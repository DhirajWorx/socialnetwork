import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/header/header.component';
import { LoginComponent } from './landing/login/login.component';
import { FooterComponent } from './landing/footer/footer.component';
import { BodyComponent } from './landing/body/body.component';
import { HomeComponent } from './landing/home/home.component';
import { SignupComponent } from './landing/signup/signup.component';
import { SearchComponent } from './landing/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    SignupComponent,
    SearchComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
