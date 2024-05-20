import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { AvecContrePartie } from '../../../classes/InformationsOpérations/avec_contre_partie/avec-contre-partie';
import { LigneAvecContrePartie } from '../../../classes/InformationsOpérations/avec_contre_partie/ligne-avec-contre-partie';
import { LigneAvecContrePartieService } from '../../../services/InformationOperation/avec contre partie/ligne-avec-contre-partie.service';
import { LigneSansContreService } from '../../../services/InformationOperation/sans contre partie/ligne-sans-contre.service';

@Component({
  selector: 'app-info-bien-services-sans-contre',
  templateUrl: './info-bien-services-sans-contre.component.html',
  styleUrl: './info-bien-services-sans-contre.component.css'
})
export class InfoBienServicesSansContreComponent implements OnInit {
  form!: FormGroup;
  countriesList: string[] = [];
  ligne!:LigneAvecContrePartie;
  affirmation!:AvecContrePartie;
  constructor(private router: Router, private formBuilder: FormBuilder, private contre: LigneSansContreService) { }

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
          this.router.navigate(['/avec-contre']);
         
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
