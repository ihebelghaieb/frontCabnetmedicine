import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CabinetMedecinService {

  constructor(private http:HttpClient) { }
  getListePatients(){
    return this.http.get('http://localhost:8080/listePatient');
  }
}

