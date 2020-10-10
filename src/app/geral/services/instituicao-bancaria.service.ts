import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InstituicaoBancaria } from '../instituicao-bancaria/instituicao-bancaria';

import { environment } from '../../../environments/environment';
import { InstituicaoBancariaPagina } from '../instituicao-bancaria/instituicao-bancariaPagina';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoBancariaService {

  url: string = environment.apiBaseUrl + '/api/instituicao-bancaria';

  constructor(
    private http: HttpClient
  ) { }

  salvar( instituicaoBancaria: InstituicaoBancaria ) : Observable<InstituicaoBancaria> {

    return this.http.post<InstituicaoBancaria>( this.url, instituicaoBancaria );

  }

  listar( page, size ): Observable<InstituicaoBancariaPagina> {
    const params = new HttpParams()
      .set( 'page' , page )
      .set( 'size', size );
    return this.http.get<any>(`${this.url}?${params.toString()}`);
  }

}
