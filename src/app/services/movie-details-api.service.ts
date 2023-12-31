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
  getMovieDetails(id:number) : Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${id}?api_key=${this.apikey}`);
  }

  //movie video api
  getMovieVideo(id:number): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${id}/videos?api_key=${this.apikey}`);
  }

  //movie cast api
  getMovieCast(id:number): Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${id}/credits?api_key=${this.apikey}`);
  }

  //Action movies api
  getActionMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  //Adventure Movies api
  getAdventureMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  //Animation Movies api
  getAnimationMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  //Comedy Movies api
  getComedyMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  //Documentary Movies api
  getDocumentaryMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  //Science Fiction Movies api
  getScienceFictionMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  //thriller Movies api
  getThrillerMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}
