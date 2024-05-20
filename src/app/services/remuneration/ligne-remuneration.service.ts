import { Injectable } from '@angular/core';
import { LigneRemuneration } from '../../classes/rémunération/ligne-remuneration';
import { Remuneration } from '../../classes/rémunération/remuneration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneRemunerationService {

  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(ligneRemuneration: LigneRemuneration) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsRemunerationsBiensCorporelsIncorporels/LigneRemunerationBiens`,ligneRemuneration);
  }

  add2(remuneration: Remuneration) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsRemunerationsBiensCorporelsIncorporels`,remuneration);
  }

}
