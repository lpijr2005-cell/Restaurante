import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlato } from '../models/plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/dishes'; 

  constructor() {}

  
  getPlatos(): Observable<IPlato[]> {
    return this.http.get<IPlato[]>(this.url);
  }

  
  savePlato(plato: IPlato): Observable<IPlato> {
  return this.http.post<IPlato>(this.url, plato);
}
}