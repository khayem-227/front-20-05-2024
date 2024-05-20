import { Component, OnInit } from '@angular/core';
import { Modification } from '../../../classes/modification/modification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentificationEntrepriseService } from '../../../services/identification_entreprise/identification-entreprise.service';
import { InfoEntreDecService } from '../../../services/identification_entreprise/info-entre-dec.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrl: './modification.component.css'
})
export class ModificationComponent implements OnInit {
  form!: FormGroup;
  m!: Modification;
  constructor(private router: Router, private formBuilder: FormBuilder, private modif: InfoEntreDecService) { }
  ngOnInit(): void {
  

    this.form = this.formBuilder.group({
      affirmation: ['', Validators.required],
      description: ['']
      

      
    });
  
   
  }

  submit(): void {
    if (this.form.valid) {
     
      this.m = { ...this.form.value }; 
      console.log(this.m);
      this.modif.modif(this.m).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/entite-mere'])
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }






}
