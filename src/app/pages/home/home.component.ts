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

  constructor(private service: MovieDetailsApiService){

  }

  ngOnInit() {
      this.bannerData();
      this.trendingMovies();
  }

  //bannerApiData
  bannerData(){
    this.service.bannerApiData().subscribe(data=>{
      this.bannerResult = data.results;
    },error => {
      alert("Something Went Wrong!!");
    })
  }

  //Trending Movies Api Data
  trendingMovies() {
    this.service.trendingMoviesApiData().subscribe(data=>{
      this.trendingMoviesResult = data.results 
      console.log(data);
      
    },error => {
      alert("Something Went Wrong!!");
    })
  }
}
