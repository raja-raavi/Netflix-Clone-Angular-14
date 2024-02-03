import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StartupPageComponent } from './startup-page/startup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsApiService } from '../services/movie-details-api.service';
import { AuthService } from '../services/auth.service';
import { AuthenticationGuard } from '../guards/authentication.guard';


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
  ],
  providers: [MovieDetailsApiService,AuthService,AuthenticationGuard],
})
export class AuthenticationModule { }
