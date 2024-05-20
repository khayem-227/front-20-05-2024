import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Declaration } from '../../../classes/Déclaration/declaration';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {
  private  baseUrl = 'http://localhost:8081'
  constructor(private http: HttpClient ) {}

  add(declaration: Declaration) {

   
    return this.http.post(`${this.baseUrl}/DéclarationPrixDeTransfert`,declaration);
  }
}
