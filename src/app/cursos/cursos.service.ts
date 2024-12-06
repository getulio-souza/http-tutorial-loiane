import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { delay, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API_URL}curso`
  constructor(private http: HttpClient) { }

  getList():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.API).pipe(
      delay(2000)
    );
  }
}
