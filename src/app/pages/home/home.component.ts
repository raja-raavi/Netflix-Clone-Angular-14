import { Component, OnInit } from '@angular/core';
import { MovieDetailsApiService } from 'src/app/services/movie-details-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bannerResult:any = [];
  trendingMoviesResult:any = [];
  actionMoviesResult:any = [];
  adventuresMoviesResult:any = [];
  animationMoviesResult:any = [];
  comedyMoviesResult:any = [];
  documentaryMoviesResult:any = [];
  scienceFictionMoviesResult:any = [];
  thrillerMoviesResult:any = [];

  constructor(private service: MovieDetailsApiService){

  }

  ngOnInit() {
      this.bannerData();
      this.trendingMovies();
      this.actionMovies();
      this.adventuresMovies();
      this.animationMovies();
      this.comedyMovies();
      this.documentaryMovies();
      this.scienceFictionMovies();
      this.thrillerMovies();
  }

  //bannerApiData
  bannerData(){
    this.service.bannerApiData().subscribe(data=>{
      this.bannerResult = data.results;
      console.log(this.bannerResult);
      
    },error => {
      alert("Something Went Wrong!!");
    })
  }

  //Trending Movies Api Data
  trendingMovies() {
    this.service.trendingMoviesApiData().subscribe(data=>{
      this.trendingMoviesResult = data.results;
      // console.log(data);
      
    },error => {
      alert("Trending Movies api Not Found!!");
    })
  }

  //Action Movies Api Data
  actionMovies() {
    this.service.getActionMovies().subscribe(data=>{
      this.actionMoviesResult = data.results;  
    },error => {
      alert("Action Movies api Not Found!!");
    })
  }

  //Adventures Movies Api Data
  adventuresMovies(){
    this.service.getAdventureMovies().subscribe(data=>{
      this.adventuresMoviesResult = data.results;
    },error => {
      alert("Adventures Movies api Not Found!!");
    })
  }

  //Animation movies api Data
  animationMovies(){
    this.service.getAnimationMovies().subscribe(data=>{
      this.animationMoviesResult = data.results;
    },error => {
      alert("Animation Movies api Not Found!!");
    })
  }

  //Comedy movies Api Data
  comedyMovies(){
    this.service.getComedyMovies().subscribe(data=>{
        this.comedyMoviesResult = data.results;
    },error=>{
        alert('Comedy Movies Api Not Found!!')
    })
  }

  //Documentary Movies Api Data
  documentaryMovies(){
    this.service.getDocumentaryMovies().subscribe(data=>{
      this.documentaryMoviesResult = data.results;
    },error=>{
      alert("Documentary Movies Api Not Found");
    })
  }

  //Science Fiction Movies APi Data
  scienceFictionMovies(){
    this.service.getScienceFictionMovies().subscribe(data=>{
      this.scienceFictionMoviesResult = data.results;
    },error=>{
      alert("Science Fiction Movies Api Not Found");
    })
  }

  //Thriller Movies Api Data
  thrillerMovies(){
    this.service.getThrillerMovies().subscribe(data=>{
      this.thrillerMoviesResult = data.results;
    },error=>{
      alert("Thriller Movies Api Not Found!!");
    })
  }
}
