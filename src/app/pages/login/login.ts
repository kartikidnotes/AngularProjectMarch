import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  loginForm;
  returnUrl: string = '/services';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: Auth
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Get return URL from query params (if redirected by guard)
    const url = this.route.snapshot.queryParams['returnUrl'];
    if (url) {
      this.returnUrl = url;
    }
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login();

      // Redirect to original page or default page
      this.router.navigate([this.returnUrl]);
    }
  }
}
