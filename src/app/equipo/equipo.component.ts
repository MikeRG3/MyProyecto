import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NosotrosComponent } from './../nosotros/nosotros.component';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

	emple:any [] = [];

  constructor(
  	private ruta:ActivatedRoute,
  	private nosotros:NosotrosComponent
  	) { 

  	this.ruta.params.subscribe(params=>{
  		this.emple = this.nosotros.mostrarEmpleado(params['id'])
  		console.log(params['id']);
  		})
  }

  ngOnInit() {
  }

}
