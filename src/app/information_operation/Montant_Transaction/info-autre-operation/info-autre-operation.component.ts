import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { InfoAutre } from '../../../classes/InformationsOpérations/info autres operation/info-autre';
import { LigneAutreInfo } from '../../../classes/InformationsOpérations/info autres operation/ligne-autre-info';
import { InfoAutreOperationService } from '../../../services/InformationOperation/informations autres operations/info-autre-operation.service';

@Component({
  selector: 'app-info-autre-operation',
  templateUrl: './info-autre-operation.component.html',
  styleUrl: './info-autre-operation.component.css'
})
export class InfoAutreOperationComponent implements OnInit {
  form!: FormGroup;
  countriesList: string[] = [];
  autreInfo!:InfoAutre;
  ligne!:LigneAutreInfo;
  constructor(private router: Router, private formBuilder: FormBuilder, private autre:InfoAutreOperationService) { }

  ngOnInit(): void {
   
    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      achatsDepenses: ['', Validators.required],
      ventesRevenus: ['', Validators.required],
      raisonSociale: ['', Validators.required],
      natureAutreOperation: ['', Validators.required], 
      identifiant: ['', Validators.required], 
      etatTerritoire: ['', Validators.required], 
      matriculeFiscal: ['', Validators.required], 
      qualite: ['', Validators.required],
      autreQualite: ['', Validators.required], 
      natureRelation: ['', Validators.required],
      autreNatureRelation: ['', Validators.required],
      methodeDeterminationPrixTransfert: ['', Validators.required],

      autreMethodeDeterminationPrixTransfert: ['', Validators.required],
      changementMethodeDeterminationPrixTransfert: ['', Validators.required],
      chnagementAutreMethodeDeterminationPrixTransfert: ['', Validators.required],
      totalVentesRevenusAutresOperations: ['', Validators.required],
      totalAchatsDepensesAutresOperations: ['', Validators.required],
      
      
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);

  }

  submit(): void {
    if (this.form.valid) {
     
      this.ligne = { ...this.form.value }; 
      this.autreInfo = { ...this.form.value }; 
      console.log(this.ligne);
      this.autre.add(this.ligne).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/pret-accorde']);
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });


      this.autre.add2(this.autreInfo).subscribe({
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
