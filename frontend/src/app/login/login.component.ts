import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    errors = {
        login: ''
    };

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService
    ) {
    }

    ngOnInit() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            this.router.navigate(['/home/reports/associate-details']);
        } else {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.loginService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
            data => {
                this.router.navigate(['/home/reports/associate-details']);
            },
            error => {
                this.loading = false;
                this.errors.login = error.error.message;
            });
    }

}
