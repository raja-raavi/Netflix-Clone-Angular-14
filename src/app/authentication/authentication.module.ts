import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StartupPageComponent } from './startup-page/startup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    StartupPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
