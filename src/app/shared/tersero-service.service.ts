import { Injectable } from '@angular/core';
import { BaseService } from './common/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TerseroServiceService extends BaseService {

  constructor(protected httpClient: HttpClient) { 
    super(httpClient, '/Terceros');
  }

  listar(){
    return this.httpClient.get('/Lista')
  }

  listarDesactivos(){
    return this.httpClient.get('/ListaDesactivos')
  }

  obtener(id:number){
    return this.httpClient.get(`/obtener/${id}`)
  }

  createUSer(user:any){
    return this.httpClient.post('/Guardar',user)
  }
  
   deleteUser(id:number){
    return this.httpClient.delete(`/Eliminar/${id}`)
  }

  updeteEstadoUser(id:number, estado:any){
    return this.httpClient.put(`/EditarEstado/${id}`, estado)
  }
}
