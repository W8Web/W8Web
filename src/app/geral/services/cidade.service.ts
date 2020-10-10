import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cidade } from '../cidade/cidade';

import { environment } from '../../../environments/environment';
import { CidadePagina } from '../cidade/cidadePagina';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  url: string = environment.apiBaseUrl + '/api/cidades';

  constructor(
    private http: HttpClient
  ) { }

  salvar( cidade: Cidade ) : Observable<Cidade> {

    return this.http.post<Cidade>( this.url, cidade )

  }

  listar( page, size ): Observable<CidadePagina> {
    const params = new HttpParams()
      .set( 'page' , page )
      .set( 'size', size );
    return this.http.get<any>(`${this.url}?${params.toString()}`);
  }

  upload( cidade: Cidade , formData: FormData ) : Observable<any> {
    return this.http.put(`${this.url}/${cidade.id}/foto`, formData , { responseType : 'blob' });
  }

}
