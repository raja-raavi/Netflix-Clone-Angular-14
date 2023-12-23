import { Component, OnInit } from '@angular/core';
import { MovieDetailsApiService } from 'src/app/services/movie-details-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bannerResult:any = [];

  constructor(private service: MovieDetailsApiService){

  }

  ngOnInit() {
      this.bannerData();
  }

  //bannerApiData
  bannerData(){
    this.service.bannerApiData().subscribe(data=>{
      this.bannerResult = data.results;
      console.log(data);
    },error => {
      alert("Something Went Wrong!!");
    })
  }
}
