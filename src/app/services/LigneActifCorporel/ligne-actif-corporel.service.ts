import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActifCorporel } from '../../classes/actif_corporel/actif-corporel';

@Injectable({
  providedIn: 'root'
})
export class LigneActifCorporelService {

 
 private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(corporel: ActifCorporel) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsGroupesEntreprises/ActifCorporel`,corporel);
  }



}
