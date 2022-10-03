import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ClienteRegistrarDto } from '../dtos/cliente-registrar';
import { ResponseMainDto } from '../dtos/response-main';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {

  constructor(private http: HttpClient) { }

  registrar(cliente: ClienteRegistrarDto): Observable<ResponseMainDto>{
    const header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<ResponseMainDto>(environment.REGISTRAR_CLIENTE, cliente, options);
  }
}
