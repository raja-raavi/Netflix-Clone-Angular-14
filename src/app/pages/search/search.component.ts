import { Component, ViewChild } from '@angular/core';
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

  searchresult:any;
  @ViewChild("searchNotFound") search:any;

  searchForm = new FormGroup({
    "movieName": new FormControl('', Validators.required)
    
  });

  submitForm(){
    console.log(this.searchForm.controls.movieName); 
    this.service.searchMovie(this.searchForm.value).subscribe(data=>{
      this.searchresult = data.results; 
      // console.log(this.searchForm.value.movieName);         
      if(this.searchresult == ""){
        this.search.nativeElement.innerHTML = 
        `Your Search for "${this.searchForm.value.movieName}" did not have any matches.<br><br>
        <h6> Suggestions: <br><br>
        1. Try different keywords.<br>
        2. Looking for a movie or TV show?<br>
        3. Try using movie, TV show title. </h6>`
      }
    })
    
  }

}
