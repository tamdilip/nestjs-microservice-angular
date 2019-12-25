import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private userRole:string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.userRole = this.loginService.user.role;
    this.loginService.getUser()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
