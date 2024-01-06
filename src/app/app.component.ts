import { Component, Host, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflixClone';
  navbarBackground: any;
  showNavbar:boolean = true;

  constructor(private router: Router){
   
  } 

  ngOnInit(){
    this.router.events.subscribe(val=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/auth/startup'){
          this.showNavbar = false;
        }else if(val.url=='/auth/login'){
          this.showNavbar = false;
        }else if(val.url=='/auth/signup'){
          this.showNavbar = false;
        }else{
          this.showNavbar = true;
        }
      }
    })
  }

  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbarBackground = {
        'background-color': '#000000'
      }
    }else{
      this.navbarBackground = { }
    }
  }
}
