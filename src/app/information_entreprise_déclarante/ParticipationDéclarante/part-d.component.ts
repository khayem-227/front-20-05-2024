import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { LignePartDecService } from '../../services/LigneParticipationDéclarante/ligne-part-dec.service';
import { LignePartDec } from '../../classes/ligne_part_declarante/ligne-part-dec';



@Component({
  selector: 'app-part-d',
  templateUrl: './part-d.component.html',
  styleUrl: './part-d.component.css'
})
export class PartDComponent implements OnInit {

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
      this.declarante.add(this.dec).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/modification']);
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }

}
