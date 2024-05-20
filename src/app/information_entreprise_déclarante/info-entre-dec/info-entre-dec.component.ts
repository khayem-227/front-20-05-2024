import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoEntreDecService } from '../../services/identification_entreprise/info-entre-dec.service';
import { Qualité } from '../../classes/qualité/qualité';
import { Changement } from '../../classes/changement';
import { InfoEntreDec } from '../../classes/Information Entreprise Declarante/info-entre-dec';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-entre-dec',
  templateUrl: './info-entre-dec.component.html',
  styleUrls: ['./info-entre-dec.component.css']
})
export class InfoEntreDecComponent implements OnInit {
  form!: FormGroup;
  information!: InfoEntreDec; // Assurez-vous que ce type est correctement défini selon votre application
  affirmation!: Changement; // Assurez-vous que ce type est correctement défini selon votre application

  constructor(private router: Router,private fb: FormBuilder, private infoService: InfoEntreDecService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      autreQualité: ['', Validators.required],
      descriptionActivitesPrincipales: ['', Validators.required],
      affirmation: ['', Validators.required],
      description: ['', Validators.required],
      emu: [false],
      emnu: [false],
      eh: [false],
      ef: [false],
      es: [false]
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.information = { ...this.form.value };
      this.affirmation = { ...this.form.value };
  
      this.infoService.add(this.information).subscribe({
        next: (addResponse) => {
          console.log('Add Info Success:', addResponse);
          this.handleQualities(); // Gestion des qualités après ajout des informations
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout des données:', error);
        }
      });
  
      this.infoService.affir(this.affirmation).subscribe({
        next: (affirmationResponse) => {
          console.log('Affirmation Success:', affirmationResponse);
          this.router.navigate(['/PartLiée']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'affirmation:', error);
        }
      });
    }
  }
  
  handleQualities() {
    const qualities = [
      { checkbox: 'emu', id: 1, value: 1 },
      { checkbox: 'emnu', id: 2, value: 2 },
      { checkbox: 'eh', id: 3, value: 3 },
      { checkbox: 'ef', id: 4, value: 4 },
      { checkbox: 'es', id: 5, value: 5 }
    ];
  
    qualities.forEach(quality => {
      if (this.form.value[quality.checkbox]) {
        let newQuality = new Qualité(quality.value);
        this.infoService.mere(newQuality).subscribe({
          next: (response) => {
            console.log(`Quality with value ${quality.value} added successfully:`, response);
          },
          error: (error) => {
            console.error(`Error adding quality with value ${quality.value}:`, error);
          }
        });
      }
    });
  }
}
