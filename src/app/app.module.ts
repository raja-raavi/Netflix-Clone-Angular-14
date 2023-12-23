import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from  '@angular/common/http';
import { MovieDetailsApiService } from './services/movie-details-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieDetailsApiService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
