import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { LigneServiceService } from '../../../services/information services/ligne-service.service';
import { LigneInfoService } from '../../../classes/information service/ligne-info-service';
import { Service } from '../../../classes/information service/service';
import { PrealablesService } from '../../../services/prealable/prealables.service';
import { LignePrealable } from '../../../classes/accors prealables/ligne-prealable';
import { Prealable } from '../../../classes/accors prealables/prealable';

@Component({
  selector: 'app-op-accord-prealable',
  templateUrl: './op-accord-prealable.component.html',
  styleUrl: './op-accord-prealable.component.css'
})
export class OpAccordPrealableComponent implements OnInit {

  form!: FormGroup;
  countriesList: string[] = [];
  ligneprealable!:LignePrealable;
  prealable!:Prealable;
  constructor(private router: Router, private formBuilder: FormBuilder, private serv:PrealablesService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      raisonSociale: ['', Validators.required],
      natureOperation: ['', Validators.required],
      identifiant: ['', Validators.required],
      etatTerritoire: ['', Validators.required], 
      matriculeFiscal: ['', Validators.required], 
      qualite: ['', Validators.required], 
      autreQualite: ['', Validators.required], 



      natureRelation: ['', Validators.required], 
      autreNatureRelation: ['', Validators.required], 
      exerciceDebut: ['', Validators.required], 
      exerciceFin: ['', Validators.required], 
      affirmation: ['', Validators.required], 
     
      
      
    });

    this.countriesList = Object.values(countries).map((country: any) => country.name);
  }


  submit(): void {
    if (this.form.valid) {
     
      this.ligneprealable = { ...this.form.value }; 
      this.prealable = { ...this.form.value }; 

      console.log(this.prealable);

      this.serv.add2(this.prealable).subscribe({
        next: (Response) => {
          console.log('Success:', Response);
        },
        error: (error) => {
          console.error('Erreur :', error);
        }
      });

      this.serv.add(this.ligneprealable).subscribe({
        next: (response) => {
          console.log('Success:', response);
         

        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });


 

    }




  }

}
