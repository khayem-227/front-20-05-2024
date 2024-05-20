 import { Component } from '@angular/core';
import { User } from '../User';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'] // Use styleUrls instead of styleUrl
})
export class SignUpComponent {
  newUser: User = {
    firstName: "",
    lastName: "",
    login: "",
    password: ""
  };

  constructor(private router: Router, private userService: ServiceService) {}



  
  registerUser(newUser: User): void {
    console.log(newUser);

    this.userService.register(newUser).subscribe({
      next: response => {
        console.log('Success:', response);
        this.router.navigate(['/SignIn']);
        alert('Inscription effectuée avec succés')
      },
      error: error => {
        console.error('Error:', error);
        if (error.error && error.error.message === 'Login already exists') {
          alert('Login already exists');
        } else {
          console.error('Unexpected error:', error);
        }
      }
    });
  }

}