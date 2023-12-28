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
  constructor(private service:MovieDetailsApiService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit() {
  let ID =   this.activatedRoute.snapshot.params['id'];
    this.movieDetails(ID);
  }

  movieDetails(ID:any){
    this.service.getMovieDetails(ID).subscribe(data=>{
      this.movieDetailsResult = data;
      
    })
  }
}
