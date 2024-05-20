import { Component, OnInit } from '@angular/core';
import { Description } from '../classes/description activité principale et politique generale du prix de transfert/description';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { DescriptionService } from '../services/description/description.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {
  form!: FormGroup;
  
  desc!:Description;
  constructor(private router: Router, private formBuilder: FormBuilder, private serv: DescriptionService ) { }
  


  ngOnInit(): void {
  

    this.form = this.formBuilder.group({
      descriptionPrincipalesActivites: ['', Validators.required],
      descriptionGeneralePolitiquePrixTransfert: ['', Validators.required],
      

      
    });
  
   
  }



  submit(): void {
    if (this.form.valid) {
     
      this.desc = { ...this.form.value }; 
      console.log(this.desc);
      this.serv.add(this.desc).subscribe({
        next: (response) => {
          console.log('Success:', response);
        this.router.navigate(['/actif-incorporel']);
   // Make sure this route is correctly configured in your routing module
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      });
    }
  }

}
