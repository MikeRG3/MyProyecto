import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(
  	public nombre:string,
  	public edad:number,
  	public especialidad:string,
  	public contratado:boolean,
  	public foto:string,
  	public descripcion:string
  	) { }
}
