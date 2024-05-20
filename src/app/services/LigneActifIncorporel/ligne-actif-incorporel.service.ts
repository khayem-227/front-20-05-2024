import { Injectable } from '@angular/core';
import { ActifIncorporel } from '../../classes/actif_incorporel/actif-incorporel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneActifIncorporelService {

  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(incorporel: ActifIncorporel) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsGroupesEntreprises/ActifInCorporel`,incorporel);
  }
}
