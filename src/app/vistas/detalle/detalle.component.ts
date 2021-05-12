import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RespuestasI, Ability } from 'src/app/modelos/respuestas.interface';
import { ApiService } from '../../servicios/api/api.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  generation: Array<any> = [];
  effectentries: Array<any> = [];
  global: any = [ ];
  datallePokemon: Ability[];



  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.detalle(1).subscribe(data => {
      console.log(data);
      this.generation = data["generation"];
      this.effectentries = data["effect_entries"];
      this.global = data;
      console.log(this.generation);
      console.log(this.effectentries);
      console.log('GLOBAL', this.global);
    });

    this.api.detallePokedex(1).subscribe(data => {
      console.log('Detalle POKEDEX', data);
      this.datallePokemon = data;
      console.log('This detalle POKEDEX', this.datallePokemon);
    });
  }


  imgPokemon(url: string): string {
    //"https://pokeapi.co/api/v2/generation/3/
    const urlOriginal = url;
    let urlRemplazo = urlOriginal.replace('https://pokeapi.co/api/v2/generation/', 'https://pokeres.bastionbot.org/images/pokemon/');
    urlRemplazo = urlRemplazo.substring(0, urlRemplazo.length - 1);
    return urlRemplazo + '.png';
  }








}
