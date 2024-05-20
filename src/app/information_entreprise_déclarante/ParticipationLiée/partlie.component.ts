import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { LignePartDec } from '../../classes/ligne_part_declarante/ligne-part-dec';
import { LignePartDecService } from '../../services/LigneParticipationDéclarante/ligne-part-dec.service';

@Component({
  selector: 'app-partlie',
  templateUrl: './partlie.component.html',
  styleUrl: './partlie.component.css'
})
export class PartlieComponent implements OnInit {


  form!: FormGroup;
  countriesList: string[] = [];
dec!:LignePartDec;
  constructor(private router: Router, private formBuilder: FormBuilder,private declarante: LignePartDecService) { }

  ngOnInit(): void {
   

    this.form = this.formBuilder.group({
      // Define form controls including 'nationalite'
      matriculeFiscal: ['', Validators.required],
      identifiant: ['', Validators.required],
      raisonSociale: ['', Validators.required],
      autreQualité: [''], 
      pourcentageDetentionCapital: ['', Validators.required],
     
      qualité:['', Validators.required],
      pourcentageDetentionDroitsVote:['', Validators.required],
      etatTerritoire:['', Validators.required],
    });

    this.countriesList = Object.values(countries).map((country: any) => country.name);
  }

  submit(): void {
    if (this.form.valid) {
     
      this.dec = { ...this.form.value }; 
      console.log(this.dec);
      this.declarante.add2(this.dec).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/PartDéc']);
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }}
