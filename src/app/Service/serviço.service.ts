import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CEP } from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiçoService {

  private readonly baseUrl:string ='https://viacep.com.br'

  constructor(private http:HttpClient) { }

  findCep(cep:string):Observable<CEP>{
    return this.http.get<CEP>(`${this.baseUrl}/ws/${cep}/json/`)
  }
}
