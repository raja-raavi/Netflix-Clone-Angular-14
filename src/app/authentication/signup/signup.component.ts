import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userData:any

  constructor(private router:Router, private auth: AuthService){

  }

  signup(signupForm:any){

    const signupUserData = {
      firstName: signupForm.value.firstName,
      email: signupForm.value.email,
      password: signupForm.value.password
    }

    console.log(signupForm.value);

    this.auth.registeredUsers(signupUserData).subscribe(data=>{
      this.userData = data;
      signupForm.reset();
      alert("Registered SuccessFully..!!");
      this.router.navigate(['auth/login']);
    }, error=>{
      alert("Something Went Worng in Signup Form");
    })
  }


}
