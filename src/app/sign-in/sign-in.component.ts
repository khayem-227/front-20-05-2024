import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { credentials } from '../models/credentials';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  newUser: credentials = {
    login: "",
    password: ""
  };

  constructor(private userService: ServiceService, private router: Router) {}

  loginUser(newUser: credentials): void {
    console.log(newUser);

    this.userService.login(newUser).subscribe({
      next: (resp: any) => {
        console.log('Login success:', resp);
        // Stockage du token dans localStorage au lieu de cookies
        localStorage.setItem('token', resp.token);

        // Navigate to a different page on success
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login error:', error);
        if (error.status === 401) {  // Typically 401 status is used for unauthorized access
          alert('Email ou mot de passe incorrect.');
        } else {
          alert('Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard.');
        }
      }
    });
  }

  signIn(): void {
    console.log("test");
    // Additional logic for sign-in if necessary
  }
}
