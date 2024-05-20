import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { PretAccorde } from '../../../classes/pret accordé/pret-accorde';
import { LigneAccordeService } from '../../../services/pret accorde/ligne-accorde.service';

@Component({
  selector: 'app-ligne-pret-emprunte',
  templateUrl: './ligne-pret-emprunte.component.html',
  styleUrl: './ligne-pret-emprunte.component.css'
})
export class LignePretEmprunteComponent implements OnInit {
  form!: FormGroup;
 countriesList: string[] = [];
 accorde!:PretAccorde;
  constructor(private router: Router, private formBuilder: FormBuilder, private serv: LigneAccordeService) { }
  ngOnInit(): void {


    
    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      matriculeFiscal: [''],
      identifiant: [''],
      raisonSociale: ['', Validators.required],
      autreQualite: [''],
      qualite: [''],
      natureRelation: [''], 
      autreNatureRelation: [''],
      soldeOuverture: [''], 
      devise: [''], 
      mouvementsAugmentations:[''],
      soldeCloture:[''], 
      pretsInterets:[''], 
      tauxInterets:[''],
      mouvementsDiminutions: [''],
      etatTerritoire:[''],
      
      
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);
    
  }
  submit(): void {
    if (this.form.valid) {
     
      this.accorde = { ...this.form.value }; 
      

      console.log(this.accorde);

      this.serv.add2(this.accorde).subscribe({
        next: (Response) => {
          console.log('Success:', Response);
           this.router.navigate(['/sans-contre']);
        },
        error: (error) => {
          console.error('Erreur :', error);
        }
      });



 

    }




}
}
