import { InsertContatoRequest } from './../models/insert-contato-request.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient, HttpParams } from'@angular/common/http';
import { GetContatosResponse } from '../models/get-contatos-response.model';
import { UpdateContatoRequest } from '../models/update-contato-request.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  constructor(private http: HttpClient) {}

  getContatos(): Observable<GetContatosResponse[]> {
    return this.http.get('http://localhost:62597/api/contato').pipe(
      map((response: GetContatosResponse[]) => {
        return response;
      })
    );
  }

  getContato(id : number): Observable<GetContatosResponse>{
    return this.http.get('http://localhost:62597/api/contato/' + id).pipe(map((response: GetContatosResponse) =>{
      return response;
    }))
  }



  insertContato(request: InsertContatoRequest) {
    return this.http
      .post('http://localhost:62597/api/contato', request)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  deleteContato(id: number) {
    return this.http
      .delete('http://localhost:62597/api/contato/' + id)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  updateContato(request: UpdateContatoRequest){
    return this.http
    .put('http://localhost:62597/api/contato', request)
    .pipe(
      map(response =>{
        return response
      })
    );
  }
}
