import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflixClone';
  navbarBackground: any;

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
