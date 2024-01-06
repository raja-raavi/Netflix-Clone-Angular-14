import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private auth: AuthService){

  }

  signin(signForm:any){
    this.auth.getAllRegisteredUsers().subscribe(data=>{
      console.log(data);
      
      const result = data.find((res:any)=>{
        return res.email === signForm.value.email && res.password === signForm.value.password;      
      });
      console.log(result);

      if(result){
        alert("You are SuccessFully LoggedIn!!!");
        localStorage.setItem("email",signForm.value.email);
        localStorage.setItem("password",signForm.value.password);
        signForm.reset();
        this.router.navigate(['/home']);
        return true;
      }else{
        alert("Opps...User Not Found With This Data!!!!");
        return false;
      }
    }, error=>{
      alert("Something Went Wrong in Sign in!!");
    })
  }
}
