import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from '../app.endpoints';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = JSON.parse(localStorage.getItem('currentUser'));
  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<any>(API.LOGIN, { email, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.user = user;
        }
        return user;
      }));
  }

  getUser() {
    return this.http.get<any>('http://localhost:3000/auth/data')
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }
}
