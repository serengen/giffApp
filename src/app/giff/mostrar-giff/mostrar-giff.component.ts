import { Component, OnInit } from '@angular/core';
import { GiffService } from '../services/giff.service';

@Component({
  selector: 'app-mostrar-giff',
  templateUrl: './mostrar-giff.component.html',
  styleUrls: ['./mostrar-giff.component.css']
})
export class MostrarGiffComponent{

  constructor(private gifService:GiffService){}

  get resultados(){
    return this.gifService.busqueda;
  }
}
