import { Component} from '@angular/core';
import { GiffService } from '../../giff/services/giff.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService:GiffService){}

  get historial(){
    return this.gifService.historial;           
  }

  busqueda(termino: string){
    this.gifService.buscarGifs(termino);
  }
}
