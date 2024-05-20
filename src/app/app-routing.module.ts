import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './information_entreprise_déclarante/home-page/home-page.component';
import { PartlieComponent } from './information_entreprise_déclarante/ParticipationLiée/partlie.component';
import { PartDComponent } from './information_entreprise_déclarante/ParticipationDéclarante/part-d.component';
import { ActifCorporelComponent } from './InformationGroupeEntreprise/actif-corporel/actif-corporel.component';
import { ActifIncorporelComponent } from './InformationGroupeEntreprise/actif-incorporel/actif-incorporel.component';
import { EntiteMereComponent } from './InformationGroupeEntreprise/entite-mere/entite-mere.component';
import { InfoOpFinanComponent } from './information_operation/Montant_Transaction/info-op-finan/info-op-finan.component';
import { InfoValeurExploitComponent } from './information_operation/Montant_Transaction/info-valeur-exploit/info-valeur-exploit.component';
import { InformationServiceComponent } from './information_operation/Montant_Transaction/information-service/information-service.component';
import { InfoAutreOperationComponent } from './information_operation/Montant_Transaction/info-autre-operation/info-autre-operation.component';
import { InfoCessionAcquiActifComponent } from './information_operation/Montant_Transaction/info-cession-acqui-actif/info-cession-acqui-actif.component';
import { RestructurationComponent } from './InformationGroupeEntreprise/restructuration/restructuration.component';
import { RemunerationBienComponent } from './information_operation/Montant_Transaction/remuneration-bien/remuneration-bien.component';
import { LignePretAccordeComponent } from './information_operation/PretsEmprunts/ligne-pret-accorde/ligne-pret-accorde.component';
import { LignePretEmprunteComponent } from './information_operation/PretsEmprunts/ligne-pret-contracte/ligne-pret-emprunte.component';
import { OpAccordPrealableComponent } from './information_operation/OperationsAccordsPrealablesOuRescritsFiscaux/op-accord-prealable/op-accord-prealable.component';
import { InfoBienServicesSansContreComponent } from './information_operation/Info_sans_contre_avec_contre/info-bien-services-sans-contre/info-bien-services-sans-contre.component';
import { DeclarationComponent } from './Déclaration/declaration/declaration.component';
import { InfoEntreDec } from './classes/Information Entreprise Declarante/info-entre-dec';
import { InfoEntreDecComponent } from './information_entreprise_déclarante/info-entre-dec/info-entre-dec.component';
import { ModificationComponent } from './information_entreprise_déclarante/modification lien capital/modification/modification.component';

const routes: Routes = [
 
  {path: 'SignIn', component: SignInComponent},
  {path: '', component: SignInComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'PartLiée', component: PartlieComponent},
  {path: 'PartDéc', component: PartDComponent},
  {path:'actif-corporel', component:ActifCorporelComponent},
  {path:'actif-incorporel', component:ActifIncorporelComponent},
  {path:'partDec', component:PartDComponent},
  {path:'entite-mere', component:EntiteMereComponent},
  {path:'operation-financiere', component:InfoOpFinanComponent},
  {path:'valeur-exploitation', component:InfoValeurExploitComponent},
  {path:'info-service', component:InformationServiceComponent},
  {path:'info-autre-op', component:InfoAutreOperationComponent},
  {path:'cession-acquisition', component:InfoCessionAcquiActifComponent},
  {path:'restructuration', component:RestructurationComponent},
  {path:'remuneration', component:RemunerationBienComponent},
  {path:'pret-accorde', component:LignePretAccordeComponent},
  {path:'pret-contracte', component:LignePretEmprunteComponent},
  {path:'prealable', component:OpAccordPrealableComponent},
  {path:'sans-contre', component:InfoBienServicesSansContreComponent},
  {path:'avec-contre', component:InfoBienServicesSansContreComponent},
  {path:'SignUp', component:SignUpComponent},
  {path:'declaration', component:DeclarationComponent},
  {path:'InfoEntreDec', component:InfoEntreDecComponent},
  {path:'modification', component:ModificationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
