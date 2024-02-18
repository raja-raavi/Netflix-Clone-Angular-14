import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { register } from '../authentication/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registeredUsers(userData: register): Observable<register> {
    return this.http.post<register>(
      'https://json-nize.onrender.com/RegisteredUsersList',
      userData
    );
  }

  getAllRegisteredUsers(): Observable<register[]> {
    return this.http.get<register[]>(
      'https://json-nize.onrender.com/RegisteredUsersList'
    );
  }

  isUserLoggedIn() {
    if (
      localStorage.getItem('email') == null &&
      localStorage.getItem('password') == null
    ) {
      return false;
    } else {
      return true;
    }
  }
}
