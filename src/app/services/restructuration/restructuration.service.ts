import { Injectable } from '@angular/core';
import { Restructuration } from '../../classes/restructuration/restructuration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestructurationService {

  private  baseUrl = 'http://localhost:8081'
  
  constructor(private http: HttpClient){}


  add(restructuration: Restructuration) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsGroupeEntreprises/RestructurationsGroupeEntreprises`,restructuration);
  }
}
