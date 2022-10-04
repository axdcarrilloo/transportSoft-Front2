import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PuertoRegistrarDto } from '../dtos/puerto-registrar';
import { ResponseMainDto } from '../dtos/response-main';

@Injectable({
  providedIn: 'root'
})
export class PuertoServicioService {

  constructor(private http: HttpClient) { }

  consultarTodas(): Observable<ResponseMainDto> {
    return this.http.get<ResponseMainDto>(environment.PUERTO_CONSULTAR_TODOS);
  }

  eliminar(id: number): Observable<ResponseMainDto> {
    return this.http.delete<ResponseMainDto>(environment.PUERTO_ELIMINAR + id);
  }

  registrar(puerto: PuertoRegistrarDto): Observable<ResponseMainDto> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<ResponseMainDto>(environment.PUERTO_REGISTRAR, puerto, options);
  }
}
