import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { LigneCession } from '../../../classes/cession acquisition/ligne-cession';
import { Cession } from '../../../classes/cession acquisition/cession';
import { LigneCessionAcquisitionService } from '../../../services/cession acquisition/ligne-cession-acquisition.service';

@Component({
  selector: 'app-info-cession-acqui-actif',
  templateUrl: './info-cession-acqui-actif.component.html',
  styleUrl: './info-cession-acqui-actif.component.css'
})
export class InfoCessionAcquiActifComponent implements OnInit {
  form!: FormGroup;
  countriesList: string[] = [];
  ligneCession!:LigneCession;
  cession!:Cession
  constructor(private router: Router, private formBuilder: FormBuilder, private ligne: LigneCessionAcquisitionService) { }


  ngOnInit(): void {
   
    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      achatsDepenses: ['', Validators.required],
      ventesRevenus: ['', Validators.required],
      raisonSociale: ['', Validators.required],
      natureOperation: ['', Validators.required], 
      autreNatureOperation: ['', Validators.required], 
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
      totalAchatsDepensesCessionsAcquisitionsActifs: ['', Validators.required],
      totalVentesRevenusCessionsAcquisitionsActifs: ['', Validators.required],
      
      
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);

  }


  submit(): void {
    if (this.form.valid) {
     
      this.ligneCession = { ...this.form.value }; 
      this.cession = { ...this.form.value }; 
      console.log(this.ligneCession);
      this.ligne.add(this.ligneCession).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/info-autre-op']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });


      this.ligne.add2(this.cession).subscribe({
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
