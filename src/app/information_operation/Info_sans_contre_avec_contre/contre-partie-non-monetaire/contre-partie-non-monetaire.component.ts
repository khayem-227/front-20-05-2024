import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { LigneAvecContrePartie } from '../../../classes/InformationsOpérations/avec_contre_partie/ligne-avec-contre-partie';
import { AvecContrePartie } from '../../../classes/InformationsOpérations/avec_contre_partie/avec-contre-partie';
import { LigneAvecContrePartieService } from '../../../services/InformationOperation/avec contre partie/ligne-avec-contre-partie.service';

@Component({
  selector: 'app-contre-partie-non-monetaire',
  templateUrl: './contre-partie-non-monetaire.component.html',
  styleUrl: './contre-partie-non-monetaire.component.css'
})
export class ContrePartieNonMonetaireComponent implements OnInit {

  form!: FormGroup;
  countriesList: string[] = [];
  ligne!:LigneAvecContrePartie;
  affirmation!:AvecContrePartie;
  constructor(private router: Router, private formBuilder: FormBuilder, private contre: LigneAvecContrePartieService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      identifiant: ['', Validators.required],
      etatTerritoire: ['', Validators.required],
      matriculeFiscal: ['', Validators.required],
      qualite: ['', Validators.required], 
      autreQualité: ['', Validators.required], 
      natureRelation: ['', Validators.required], 
      autreNatureRelation: ['', Validators.required], 
      natureBiensOuService: ['', Validators.required], 
      natureContrepartie: ['', Validators.required], 
      raisonSociale: ['', Validators.required], 
      affirmation: ['', Validators.required], 

     
      
      
    });

    this.countriesList = Object.values(countries).map((country: any) => country.name);
  }

  submit(): void {
    if (this.form.valid) {
     
      this.ligne = { ...this.form.value }; 
      this.affirmation = { ...this.form.value }; 
      console.log(this.ligne);
      this.contre.add(this.ligne).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/prealable']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });


      this.contre.add2(this.affirmation).subscribe({
        next: (affirmationResponse) => {
          console.log('Affirmation Success:', affirmationResponse);
        },
        error: (error) => {
          console.error('Erreur lors de l\'affirmation:', error);
        }
      });

    }
  }

}
