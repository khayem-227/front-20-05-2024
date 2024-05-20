import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { InfoOpFinService } from '../../../services/informations operations financieres/info-op-fin.service';
import { LigneInfoOpFin } from '../../../classes/informations operations financieres/ligne-info-op-fin';
import { InfoOpFin } from '../../../classes/informations operations financieres/info-op-fin';

@Component({
  selector: 'app-info-op-finan',
  templateUrl: './info-op-finan.component.html',
  styleUrl: './info-op-finan.component.css'
})
export class InfoOpFinanComponent implements OnInit {
  form!: FormGroup;
  countriesList: string[] = [];
ligne!:LigneInfoOpFin;
op!:InfoOpFin;
  constructor(private router: Router, private formBuilder: FormBuilder, private ligneInfoOpFin: InfoOpFinService) { }


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
      totalAchatsDepensesOperationsFinancieres:['', Validators.required],
      totalVentesRevenusOperationsFinancieres:['', Validators.required],
      
      
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);

  }
  submit(): void {
    if (this.form.valid) {
     
      this.ligne = { ...this.form.value }; 
      this.op = { ...this.form.value }; 
      console.log(this.ligne);
      this.ligneInfoOpFin.add(this.ligne).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/cession-acquisition']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });


      this.ligneInfoOpFin.add2(this.op).subscribe({
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
