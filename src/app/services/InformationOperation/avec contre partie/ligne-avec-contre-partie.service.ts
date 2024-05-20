import { Injectable } from '@angular/core';
import { LigneAvecContrePartie } from '../../../classes/InformationsOpérations/avec_contre_partie/ligne-avec-contre-partie';
import { HttpClient } from '@angular/common/http';
import { AvecContrePartie } from '../../../classes/InformationsOpérations/avec_contre_partie/avec-contre-partie';

@Injectable({
  providedIn: 'root'
})
export class LigneAvecContrePartieService {

  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(ligne: LigneAvecContrePartie) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsOperations/OperationsSansContrepartieOuAvecContrepartieNonMonetaire/InformationsSurContrepartieNonMonetairePourBiensOuServices/LigneContrepartieNonMonetairePourBiensOuServices`,ligne);
  }

  add2(avec: AvecContrePartie) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsOperations/OperationsSansContrepartieOuAvecContrepartieNonMonetaire/InformationsSurContrepartieNonMonetairePourBiensOuServices`,avec);
  }



}
