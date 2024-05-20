import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LigneInfoService } from '../../classes/information service/ligne-info-service';
import { Service } from '../../classes/information service/service';

@Injectable({
  providedIn: 'root'
})
export class LigneServiceService {
  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient){}

  add(ligneService: LigneInfoService) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsServices/LigneService`,ligneService);
  }

  add2(service: Service) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert/MontantTransaction/InformationsServices`,service );
  }

}
