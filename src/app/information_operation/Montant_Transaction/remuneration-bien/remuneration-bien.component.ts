import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { LigneRemuneration } from '../../../classes/rémunération/ligne-remuneration';
import { Remuneration } from '../../../classes/rémunération/remuneration';
import { LigneRemunerationService } from '../../../services/remuneration/ligne-remuneration.service';

@Component({
  selector: 'app-remuneration-bien',
  templateUrl: './remuneration-bien.component.html',
  styleUrl: './remuneration-bien.component.css'
})
export class RemunerationBienComponent implements OnInit  {

  form!: FormGroup;
  countriesList: string[] = [];
  LigneRemuneration!:LigneRemuneration;
  remuneration!:Remuneration;

  constructor(private router: Router, private formBuilder: FormBuilder,private serv: LigneRemunerationService  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      achatsDepenses: ['', Validators.required],
      ventesRevenus: ['', Validators.required],
      raisonSociale: ['', Validators.required],
      natureOperation: [''], 
      autreNatureOperation: [''], 
      identifiant: [''], 
      etatTerritoire: [''], 
      matriculeFiscal: [''], 
      qualite: [''],
      autreQualite: [''], 
      natureRelation: [''],
      autreNatureRelation: [''],
      methodeDeterminationPrixTransfert: ['', Validators.required],

      autreMethodeDeterminationPrixTransfert: [''],
      changementMethodeDeterminationPrixTransfert: [''],
      chnagementAutreMethodeDeterminationPrixTransfert: [''],
      
      totalVentesRevenusRemunerationsBiensCorporelsIncorporels:['', Validators.required],
	
      totalAchatsDepensesRemunerationsBiensCorporelsIncorporels:['', Validators.required],
      
      
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);

  }

  submit(): void {
    if (this.form.valid) {
     
      this.LigneRemuneration = { ...this.form.value }; 
      this.remuneration = { ...this.form.value }; 
      console.log(this.LigneRemuneration);
      this.serv.add(this.LigneRemuneration).subscribe({
        next: (response) => {
          console.log('Success:', response);
           this.router.navigate(['/info-service']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });


      this.serv.add2(this.remuneration).subscribe({
        next: (Response) => {
          console.log('Success:', Response);
        },
        error: (error) => {
          console.error('Erreur :', error);
        }
      });

    }




  }

}
