import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { Identification } from '../../classes/identification';
import { IdentificationEntrepriseService } from '../../services/identification_entreprise/identification-entreprise.service';
import { DeclarationService } from '../../services/identification_entreprise/Déclaration/declaration.service';
import { Declaration } from '../../classes/Déclaration/declaration';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrl: './declaration.component.css'
})
export class DeclarationComponent {



  form!: FormGroup;

  isSaved: boolean = false;
  dec!: Declaration;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private declaration: DeclarationService) { }

  ngOnInit(): void {
  

    this.form = this.formBuilder.group({
      matriculeFiscalDeclarant: ['', Validators.required],
      codeActe: ['', Validators.required],
      codeTva: ['', Validators.required],
      codeCatégorie: ['', Validators.required],
      typeDéclaration: ['', Validators.required],
      dateDébutExercice: ['', Validators.required],
      dateFinExercice: ['', Validators.required],
      exercice: ['', Validators.required]
     
      
    });
  
    
  }

  submit(): void {
    if (this.form.valid) {
     
      this.dec = { ...this.form.value }; 
      console.log(this.dec);
      this.declaration.add(this.dec).subscribe({
        next: (response) => {
          console.log('Success:', response);
         
          this.router.navigate(['/home']); 
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }


}
