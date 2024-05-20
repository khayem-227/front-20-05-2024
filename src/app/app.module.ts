import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './information_entreprise_déclarante/home-page/home-page.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { PartlieComponent } from './information_entreprise_déclarante/ParticipationLiée/partlie.component';
import { NavbarComponent } from './navbar/navbar.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from "@angular/material/input"; 
import { MatButtonModule } from "@angular/material/button"; 
import { SignInComponent } from './sign-in/sign-in.component';
import { PartDComponent } from './information_entreprise_déclarante/ParticipationDéclarante/part-d.component';
import { ActifIncorporelComponent } from './InformationGroupeEntreprise/actif-incorporel/actif-incorporel.component';
import { ActifCorporelComponent } from './InformationGroupeEntreprise/actif-corporel/actif-corporel.component';
import { RestructurationComponent } from './InformationGroupeEntreprise/restructuration/restructuration.component';
import { InfoValeurExploitComponent } from './information_operation/Montant_Transaction/info-valeur-exploit/info-valeur-exploit.component';
import { RemunerationBienComponent } from './information_operation/Montant_Transaction/remuneration-bien/remuneration-bien.component';
import { InformationServiceComponent } from './information_operation/Montant_Transaction/information-service/information-service.component';
import { InfoOpFinanComponent } from './information_operation/Montant_Transaction/info-op-finan/info-op-finan.component';
import { InfoCessionAcquiActifComponent } from './information_operation/Montant_Transaction/info-cession-acqui-actif/info-cession-acqui-actif.component';
import { InfoAutreOperationComponent } from './information_operation/Montant_Transaction/info-autre-operation/info-autre-operation.component';
import { EntiteMereComponent } from './InformationGroupeEntreprise/entite-mere/entite-mere.component';
import { LignePretAccordeComponent } from './information_operation/PretsEmprunts/ligne-pret-accorde/ligne-pret-accorde.component';
import { LignePretEmprunteComponent } from './information_operation/PretsEmprunts/ligne-pret-contracte/ligne-pret-emprunte.component';
import { InfoBienServicesSansContreComponent } from './information_operation/Info_sans_contre_avec_contre/info-bien-services-sans-contre/info-bien-services-sans-contre.component';
import { ContrePartieNonMonetaireComponent } from './information_operation/Info_sans_contre_avec_contre/contre-partie-non-monetaire/contre-partie-non-monetaire.component';
import { OpAccordPrealableComponent } from './information_operation/OperationsAccordsPrealablesOuRescritsFiscaux/op-accord-prealable/op-accord-prealable.component';
import { DeclarationComponent } from './Déclaration/declaration/declaration.component';
import { InfoEntreDecComponent } from './information_entreprise_déclarante/info-entre-dec/info-entre-dec.component';
import { ModificationComponent } from './information_entreprise_déclarante/modification lien capital/modification/modification.component';
import { DescriptionComponent } from './description/description.component';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
 
    PartlieComponent,
      NavbarComponent,
      PartDComponent,
      ActifIncorporelComponent,
      ActifCorporelComponent,
      RestructurationComponent,
      InfoValeurExploitComponent,
      RemunerationBienComponent,
      InformationServiceComponent,
      InfoOpFinanComponent,
      InfoCessionAcquiActifComponent,
      InfoAutreOperationComponent,
      EntiteMereComponent,
      LignePretAccordeComponent,
      LignePretEmprunteComponent,
      InfoBienServicesSansContreComponent,
      ContrePartieNonMonetaireComponent,
      OpAccordPrealableComponent,
      DeclarationComponent,
      InfoEntreDecComponent,
      ModificationComponent,
      DescriptionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    AsyncPipe,
    MultiSelectModule,
    DialogModule,
    ButtonModule,
    MatStepperModule,
    MatInputModule, 
    MatButtonModule, 
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
