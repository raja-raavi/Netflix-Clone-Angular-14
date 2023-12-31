import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsApiService } from 'src/app/services/movie-details-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movieDetailsResult:any;
  movieVideoResult:any;
  movieCastResult:any;
  constructor(private service:MovieDetailsApiService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit() {
  let ID =   this.activatedRoute.snapshot.params['id'];
    this.movieDetails(ID);
    this.movieVideo(ID);
    this.movieCast(ID);
  }

  movieDetails(ID:number){
    this.service.getMovieDetails(ID).subscribe(data=>{
      this.movieDetailsResult = data;   
    }, error=>{
      alert('movie Details Not Found!!')
    })
  }

  movieVideo(ID:number){
    this.service.getMovieVideo(ID).subscribe(data=>{
      // console.log(data);
      data.results.forEach((element:any) => {
        if(element.type=="Trailer"){
          this.movieVideoResult = element.key
        }
      });  
    }, error=>{
      alert('movie Video Not Found!!')
    })
  }

  movieCast(ID:number){
    this.service.getMovieCast(ID).subscribe(data=>{
      this.movieCastResult = data.cast
      console.log(data.cast);
    }, error=>{
      alert('movie Cast Not Found!!')
    })  
  }
}
