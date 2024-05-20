import { Injectable } from '@angular/core';
import { InfoEntreDec } from '../../classes/Information Entreprise Declarante/info-entre-dec';
import { HttpClient } from '@angular/common/http';
import { Qualité } from '../../classes/qualité/qualité';
import { Changement } from '../../classes/changement';
import { Modification } from '../../classes/modification/modification';

@Injectable({
  providedIn: 'root'
})
export class InfoEntreDecService {

  private  baseUrl = 'http://localhost:8081'
  
  constructor(private http: HttpClient) { 

   
  }





  add(information: InfoEntreDec) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsEntrepriseDeclarante`,information);
  }

  affir(affirmation: Changement) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsEntrepriseDeclarante/ChangementsActiviteAucoursExercice`,affirmation);
  }

  modif(modification: Modification) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsEntrepriseDeclarante/ModificationLiensCapitalAuCoursExercice`,modification);
  }






















 mere(qualite:Qualité){
  return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsEntrepriseDeclarante/qualite`,qualite);
 }

 



}
