import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list'; // Import countries list
import { ServiceService } from '../../service.service';
import { IdentificationEntrepriseService } from '../../services/identification_entreprise/identification-entreprise.service';
import { Identification } from '../../classes/identification';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  form!: FormGroup;
  countriesList: string[] = []; 
  isSaved: boolean = false;
  entreprise!: Identification;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private identification: IdentificationEntrepriseService) { }

  ngOnInit(): void {
  
    console.log('Stored JWT Token:', localStorage.getItem('token'));  // Affichage du token pour vérification
  
    this.form = this.formBuilder.group({
      raisonSocial: ['', Validators.required],
      formeJuridique: ['', Validators.required],
      adresseSiegeSocialEtablissementTunisie: ['', Validators.required],
      codePostal: ['', Validators.required],
      activitePrincipale: ['', Validators.required],
      chiffreAffaireAnnuel: ['', Validators.required],
      nationalite: ['', Validators.required],
      activiteSecondaire:[''],

      
    });
  
    this.countriesList = Object.values(countries).map((country: any) => country.name);
  }

  submit(): void {
    const token = localStorage.getItem('token');
    console.log('JWT Token at submission:', token);
    if (this.form.valid) {
      this.entreprise = { ...this.form.value };
      this.identification.add(this.entreprise).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/InfoEntreDec']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
          if (error.status === 401) {
            alert('Non autorisé : Veuillez vous reconnecter.');
            this.router.navigate(['/SignIn']);
          } else if (error.status === 400) {
            alert('Données invalides : Veuillez vérifier les informations saisies.');
          } else {
            alert('Erreur serveur : Veuillez réessayer plus tard.');
          }
        }
      });
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
  
}