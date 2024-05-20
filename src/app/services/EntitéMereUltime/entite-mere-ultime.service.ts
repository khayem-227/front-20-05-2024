import { Injectable } from '@angular/core';
import { EntiteMereUltime } from '../../classes/entite_mere_ultime/entite-mere-ultime';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntiteMereUltimeService {

  private  baseUrl = 'http://localhost:8081'
  
  constructor(private http: HttpClient){}


  add(mere: EntiteMereUltime) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsGroupesEntreprises/InformationsMereEntiteUltime`,mere);
  }
}
