import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from 'src/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://rickandmortyapi.com/api/character';
  }

  getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(this.apiUrl); //que el get es de tipo characters para que coincida con el tipo del observable
  }
}
