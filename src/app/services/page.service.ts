import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  isLogged = false;
  baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  crearUsuario(formData: any) {
    const headers = new HttpHeaders().set(
      'x-token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZjhkMGNjMGRiYTZmNDBmMThkNWNlZjEiLCJpYXQiOjE2MDMwOTU1OTYsImV4cCI6MTYwMzE4MTk5Nn0.ObT8L9GHhKs33btMJkIUQAc2Z6KoKZaOseVwcwb9c7U'
    );
    /*const headers = (
      'x-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZjhkMGNjMGRiYTZmNDBmMThkNWNlZjEiLCJpYXQiOjE2MDMwOTU1OTYsImV4cCI6MTYwMzE4MTk5Nn0.ObT8L9GHhKs33btMJkIUQAc2Z6KoKZaOseVwcwb9c7U'
    );*/
    console.log('creando usuario');
    return this.http.post(`${this.baseUrl}/examen`, formData, { headers });
  }
  login(formData: any) {
    console.log('login');
    return this.http.post(`${this.baseUrl}/login`, formData);
  }
}
