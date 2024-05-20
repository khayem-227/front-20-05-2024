import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { ActifCorporel } from '../../classes/actif_corporel/actif-corporel';
import { LigneActifCorporelService } from '../../services/LigneActifCorporel/ligne-actif-corporel.service';


@Component({
  selector: 'app-actif-corporel',
  templateUrl: './actif-corporel.component.html',
  styleUrl: './actif-corporel.component.css'
})
export class ActifCorporelComponent implements OnInit {

  form!: FormGroup;
 countriesList: string[] = [];
actif!:ActifCorporel;
  

  constructor(private router: Router, private formBuilder: FormBuilder, private corporel: LigneActifCorporelService) { }

  ngOnInit(): void {
   

    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      matriculeFiscal: ['', Validators.required],
      identifiant: [''],
      raisonSociale: ['', Validators.required],
      autreNatureActifcorporel: [''], 
      autreNatureRelation:['', Validators.required],
      autrequalité: [''],
      natureActifcorporel :['', Validators.required],
      etatTerritoire:[''],
      qualite: [''],
    
      
      
    });
     this.countriesList = Object.values(countries).map((country: any) => country.name);


  }

  submit(): void {
    if (this.form.valid) {
     
      this.actif = { ...this.form.value }; 
      console.log(this.actif);
      this.corporel.add(this.actif).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/restructuration']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }

 

}
