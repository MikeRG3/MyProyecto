import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

	private personas:any[];
	private mostrar:boolean;
  constructor() {

  	this.personas=[new EquipoService("Miguel", 31,"Angular", false,"./../assets/222.jpg", " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."),
  			new EquipoService("Cesar",33, "HTML", true, "./../assets/foto.jpg",  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."),
  			new EquipoService("Jaime",27, "PHP", false, "./../assets/foto.jpg"," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod")
  	];


   }

  ngOnInit() {

  	
  }
  mostrarContratados(){
  	this.mostrar=true;
  }
  mostrarDisponibles(){
  	this.mostrar=false;
  }
  mostrarEmpleado(i){
  	
  	return this.personas[i];
  }

}
