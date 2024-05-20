import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { LigneInfoService } from '../../../classes/information service/ligne-info-service';
import { LigneServiceService } from '../../../services/information services/ligne-service.service';
import { Service } from '../../../classes/information service/service';

@Component({
  selector: 'app-information-service',
  templateUrl: './information-service.component.html',
  styleUrl: './information-service.component.css'
})
export class InformationServiceComponent implements OnInit {

  form!: FormGroup;
  countriesList: string[] = [];
  ligneService!:LigneInfoService;
  service!:Service;


  constructor(private router: Router, private formBuilder: FormBuilder, private serv: LigneServiceService) { }
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
      
      totalAchatsDepensesServices:['', Validators.required],
	
      totalVentesServices:['', Validators.required],
      
      
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);

  }
  submit(): void {
    if (this.form.valid) {
     
      this.ligneService = { ...this.form.value }; 
      this.service = { ...this.form.value }; 
      console.log(this.ligneService);
      this.serv.add(this.ligneService).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/operation-financiere']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });


      this.serv.add2(this.service).subscribe({
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
