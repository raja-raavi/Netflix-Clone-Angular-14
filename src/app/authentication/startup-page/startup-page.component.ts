import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup-page',
  templateUrl: './startup-page.component.html',
  styleUrls: ['./startup-page.component.css']
})
export class StartupPageComponent {

    constructor(private router: Router){

    }

    signInClicked(){
      console.log("clicked");
      
      this.router.navigate(['/auth/login']);
    }
}
