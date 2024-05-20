import { Injectable } from '@angular/core';
import { LigneInfoOpFin } from '../../classes/informations operations financieres/ligne-info-op-fin';
import { InfoOpFin } from '../../classes/informations operations financieres/info-op-fin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoOpFinService {

  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(ligneInfoOp: LigneInfoOpFin) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/InformationsOperations/MontantTransactions/InformationsOperationsFinancieres/ligneOperationFinanciere`,ligneInfoOp);
  }

  add2(infoOp: InfoOpFin) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsOperationsFinancieres`,infoOp);
  }



}
