import { Injectable } from '@angular/core';
import { Description } from '../../classes/description activité principale et politique generale du prix de transfert/description';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  private  baseUrl = 'http://localhost:8081'
  
  constructor(private http: HttpClient) { 

   
  }





  add(desc: Description) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsGroupeEntreprises`,desc);
  }
}
