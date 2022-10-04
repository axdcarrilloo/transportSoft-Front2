import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CamionRegistrarDto } from '../dtos/camion-registrar';
import { ResponseMainDto } from '../dtos/response-main';


@Injectable({
  providedIn: 'root'
})
export class CamionServicioService {

  constructor(private http: HttpClient) { }

  consultarTodos(): Observable<ResponseMainDto> {
    return this.http.get<ResponseMainDto>(environment.CAMION_CONSULTAR_TODOS);
  }

  eliminar(id: number): Observable<ResponseMainDto> {
    return this.http.delete<ResponseMainDto>(environment.CAMION_ELIMINAR + id);
  }

  registrar(camion: CamionRegistrarDto): Observable<ResponseMainDto> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<ResponseMainDto>(environment.CAMION_REGISTRAR, camion, options);
  }

}
