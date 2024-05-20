import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { Restructuration } from '../../classes/restructuration/restructuration';
import { RestructurationService } from '../../services/restructuration/restructuration.service';

@Component({
  selector: 'app-restructuration',
  templateUrl: './restructuration.component.html',
  styleUrl: './restructuration.component.css'
})
export class RestructurationComponent implements OnInit {


  form!: FormGroup;
  countriesList: string[] = [];
  res!:Restructuration;

  constructor(private router: Router, private formBuilder: FormBuilder, private restructuration: RestructurationService) { }
  ngOnInit(): void {
   

    this.form = this.formBuilder.group({
      
      description: [''],
      affirmation: ['', Validators.required],
    
      
     
    });
    
   
  }
  submit(): void {
    if (this.form.valid) {
     
      this.res = { ...this.form.value }; 
      console.log(this.restructuration);
      this.restructuration.add(this.res).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/valeur-exploitation']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }
}
