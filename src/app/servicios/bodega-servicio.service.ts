import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodegaRegistrarDto } from '../dtos/bodega-registrar';
import { ResponseMainDto } from '../dtos/response-main';

@Injectable({
  providedIn: 'root'
})
export class BodegaServicioService {

  constructor(private http: HttpClient) { }

  consultarTodas(): Observable<ResponseMainDto> {
    return this.http.get<ResponseMainDto>(environment.BODEGA_CONSULTAR_TODAS);
  }

  eliminar(id: number): Observable<ResponseMainDto> {
    return this.http.delete<ResponseMainDto>(environment.BODEGA_ELIMINAR + id);
  }

  registrar(bodega: BodegaRegistrarDto): Observable<ResponseMainDto> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<ResponseMainDto>(environment.BODEGA_REGISTRAR, bodega, options);
  }

}
