import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RespuestasI, PokemonColor, Ability } from '../../modelos/respuestas.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL API
  private url = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  catalogoPokedex(): Observable<RespuestasI> {
    const direccion = this.url + 'pokemon?offset=20&limit=20';

    return this.http.get<RespuestasI>(direccion);
  }

  detallePokedex(id: number): Observable<Ability[]> {
    const direccion = this.url + 'ability/' + id + '/';

    return this.http.get<Ability[]>(direccion);
  }


  detalle(id: number){
    const direccion = this.url + 'ability/' + id + '/';
    return this.http.get(direccion);
  }


  colorPokemon(name: string): Observable<PokemonColor> {
    const direccion = this.url + '/pokemon-color/' + name + '/';

    return this.http.get<PokemonColor>(direccion);
  }


}
