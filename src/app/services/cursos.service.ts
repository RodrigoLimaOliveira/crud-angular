import { Curso } from './../models/curso.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API = '/api/cursos';

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API);
  }

  save(record: Curso) {
    return this.http.post<Curso>(this.API, record);
  }
}
