import { Injectable } from '@angular/core';
import { LigneAutreInfo } from '../../../classes/InformationsOpérations/info autres operation/ligne-autre-info';
import { InfoAutre } from '../../../classes/InformationsOpérations/info autres operation/info-autre';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoAutreOperationService {

 
  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(ligne: LigneAutreInfo) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsAutresOperations/LigneAutreOperation`,ligne);
  }

  add2(info: InfoAutre) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsAutresOperations`,info);
  }



}
