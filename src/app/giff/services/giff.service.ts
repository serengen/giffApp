import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GiffService {

  private _historial: string[] = [];
  private apiKey : string = '73QNcLgrZq06nnMuTbaSVom3s6Eioj9Y';
  private url : string = 'http://api.giphy.com/v1/gifs';
  public busqueda : any[] =[];
  get historial(){
    return [...this._historial];
  }
  constructor(private http:HttpClient){
    
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.busqueda = JSON.parse(localStorage.getItem('resultados')!) || [];
  
  }
  buscarGifs(query: string){
    
    query = query.trim().toLocaleLowerCase();
    if(query == ''){
      return;
    }else if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }


    const params = new HttpParams()
    .set('apikey',this.apiKey)
    .set('q',query)
    .set('limit','20')

   this.http.get<SearchGIFResponse>(`${this.url}/search?${params}`)
   .subscribe((resp) =>{
    console.log(this.busqueda);
    this.busqueda = resp.data;
    localStorage.setItem('resultados',JSON.stringify(this.busqueda));
   })

  }
}
