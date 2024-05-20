import { Injectable } from '@angular/core';
import { PretAccorde } from '../../classes/pret accordé/pret-accorde';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneAccordeService {

  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(accorde: PretAccorde) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsOperations/InformationsPretsEmprunts/LignePretAccorde`,accorde);
  }

  add2(accorde: PretAccorde) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsOperations/InformationsPretsEmprunts/LigneEmpruntContracte`,accorde);
  }

  

  
}
