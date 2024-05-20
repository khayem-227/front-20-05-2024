import { Injectable } from '@angular/core';
import { LigneCession } from '../../classes/cession acquisition/ligne-cession';
import { Cession } from '../../classes/cession acquisition/cession';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneCessionAcquisitionService {

  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient) { }


  add(ligne: LigneCession) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsCessionsAcquisitionsActifs/LigneCessionAcquisitionActif`,ligne);
  }

  add2(cession: Cession) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsCessionsAcquisitionsActifs`,cession);
  }

}
