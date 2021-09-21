import { Injectable } from '@angular/core';
import { Datos } from './datos.models';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datos: Datos[] =[
    {
      usuario : 'hola123'
    }
  ] 
    constructor() { }

  getDatos()
  {
    return this.datos
  }
  
  addDatos(usuario: string)
  {
    this.datos.push(
      {usuario: usuario})
  }
   
}
