import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieDetailsApiService } from 'src/app/services/movie-details-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service: MovieDetailsApiService){

  }

  searchresult:any
  searchForm = new FormGroup({
    "movieName": new FormControl('', Validators.required)
    
  });

  submitForm(){
    console.log(this.searchForm.controls.movieName); 
    this.service.searchMovie(this.searchForm.value).subscribe(data=>{
      this.searchresult = data.results;
      if(this.searchresult == ""){
        alert("nothig")
      }
    })
    
  }

}
