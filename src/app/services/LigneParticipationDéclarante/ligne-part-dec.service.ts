import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LignePartDec } from '../../classes/ligne_part_declarante/ligne-part-dec';

@Injectable({
  providedIn: 'root'
})
export class LignePartDecService {
  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(declarante: LignePartDec) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsEntrepriseDeclarante/LigneParticipationDeclarante`,declarante);
  }

  add2(declarante: LignePartDec) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsEntrepriseDeclarante/LigneParticipationLiee`,declarante);
  }

  

}
