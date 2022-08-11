import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GiffService } from '../services/giff.service';

@Component({
  selector: 'app-buscar-giff',
  templateUrl: './buscar-giff.component.html',
  styleUrls: ['./buscar-giff.component.css']
})
export class BuscarGiffComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GiffService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    
    this.gifService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value='';
  }

}
