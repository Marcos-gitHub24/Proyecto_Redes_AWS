import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UcronServicesService {

  constructor(private http: HttpClient) { }

  getAdministradores() {
    return this.http.get('/Administradores');
  }

  getDesarrolladores() {
    return this.http.get('/Desarrolladores');
  }

  getFuncion() {
    return this.http.get('/Funcion');
  }

  getDesarrollo() {
    return this.http.get('/Desarrollo');
  }
}
