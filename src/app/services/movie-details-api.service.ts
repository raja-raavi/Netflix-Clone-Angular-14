import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsApiService {

  constructor(private http:HttpClient) { 

  }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  //banner Api Data
  bannerApiData() : Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  //Trendings movies Data
  trendingMoviesApiData() : Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  //seaarch movie Api
  searchMovie(data:any) : Observable<any> {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  //movie details api
  getMovieDetails(id:any) : Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${id}?api_key=${this.apikey}`);
  }
}
