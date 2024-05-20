import { Injectable } from '@angular/core';
import { LignePrealable } from '../../classes/accors prealables/ligne-prealable';
import { Prealable } from '../../classes/accors prealables/prealable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrealablesService {

 
  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(lignePrealabale: LignePrealable) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsOperations/InformationsOperationsAccordsPrealablesOuRescritsFiscaux/LigneOperationsAccordsPrealablesOuRescritsFiscaux/{idInformationsOperationsAccordsPrealablesOuRescritsFiscaux}`,lignePrealabale);
  }

  add2(prealable: Prealable) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsOperations/InformationsOperationsAccordsPrealablesOuRescritsFiscaux/{idInformationsOperations}`,prealable);
  }
}
