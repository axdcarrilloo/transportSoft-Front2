import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { FlotaRegistrarDto } from '../dtos/flota-registrar';
import { ResponseMainDto } from '../dtos/response-main';

@Injectable({
  providedIn: 'root'
})
export class FlotaServicioService {

  constructor(private http: HttpClient) { }

  eliminar(id: number): Observable<ResponseMainDto> {
    return this.http.delete<ResponseMainDto>(environment.FLOTA_ELIMINAR + id);
  }

  consultarTodas(): Observable<ResponseMainDto> {
    return this.http.get<ResponseMainDto>(environment.FLOTA_CONSULTAR_TODAS);
  }

  registrar(flota: FlotaRegistrarDto): Observable<ResponseMainDto> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<ResponseMainDto>(environment.FLOTA_REGISTRAR, flota, options);
  }

}
