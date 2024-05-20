import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { ActifIncorporel } from '../../classes/actif_incorporel/actif-incorporel';
import { LigneActifIncorporelService } from '../../services/LigneActifIncorporel/ligne-actif-incorporel.service';

@Component({
  selector: 'app-actif-incorporel',
  templateUrl: './actif-incorporel.component.html',
  styleUrl: './actif-incorporel.component.css'
})
export class ActifIncorporelComponent implements OnInit {
  form!: FormGroup;
  countriesList: string[] = [];
actif!:ActifIncorporel;
  constructor(private router: Router, private formBuilder: FormBuilder, private incorporel: LigneActifIncorporelService) { }
  ngOnInit(): void {
   

    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      matriculeFiscal: ['', Validators.required],
      identifiant: [''],
      raisonSociale: ['', Validators.required],
      autreNatureActifIncorporel: [''], 
      autreNatureRelation:[''],
      autrequalité: [''],
      natureActifIncorporel :['', Validators.required],
      etatTerritoire:[''],
      qualite: [''],
      onreuxGratuit:['', Validators.required],
     
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);
   
  }
  submit(): void {
    if (this.form.valid) {
     
      this.actif = { ...this.form.value }; 
      console.log(this.actif);
      this.incorporel.add(this.actif).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/actif-corporel']);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }
}
