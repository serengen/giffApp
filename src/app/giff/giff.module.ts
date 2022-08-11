import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiffPageComponent } from './giff-page/giff-page.component';
import { BuscarGiffComponent } from './buscar-giff/buscar-giff.component';
import { MostrarGiffComponent } from './mostrar-giff/mostrar-giff.component';



@NgModule({
  declarations: [
    GiffPageComponent,
    BuscarGiffComponent,
    MostrarGiffComponent
  ],
  exports:[
    GiffPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiffModule { }
