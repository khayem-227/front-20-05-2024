import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Identification } from '../../classes/identification';

@Injectable({
  providedIn: 'root'
})
export class IdentificationEntrepriseService {
  private  baseUrl = 'http://localhost:8081'
  
  constructor(private http: HttpClient) { 

   
  }

  add(entreprise: Identification) {

   
    return this.http.post(`${this.baseUrl}/Entreprise`,entreprise);
  }
}
