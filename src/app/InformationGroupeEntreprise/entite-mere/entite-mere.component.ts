import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { EntiteMereUltime } from '../../classes/entite_mere_ultime/entite-mere-ultime';
import { EntiteMereUltimeService } from '../../services/EntitéMereUltime/entite-mere-ultime.service';

@Component({
  selector: 'app-entite-mere',
  templateUrl: './entite-mere.component.html',
  styleUrl: './entite-mere.component.css'
})
export class EntiteMereComponent implements OnInit {
 
  form!: FormGroup;
  countriesList: string[] = [];
entite!:EntiteMereUltime;
  constructor(private router: Router, private formBuilder: FormBuilder, private mere: EntiteMereUltimeService ) { }
  ngOnInit(): void {
   

    this.form = this.formBuilder.group({
      
      identifiant: ['', Validators.required],
      matriculeFiscal: ['', Validators.required],
      etatTerritoire: ['', Validators.required],
      raisonSociale: ['', Validators.required], 
      adresseSiegeSocial: ['', Validators.required], 
      
     
    });
    this.countriesList = Object.values(countries).map((country: any) => country.name);
   
  }
  submit(): void {
    if (this.form.valid) {
     
      this.entite = { ...this.form.value }; 
      console.log(this.mere);
      this.mere.add(this.entite).subscribe({
        next: (response) => {
          console.log('Success:', response);
         
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }


}
