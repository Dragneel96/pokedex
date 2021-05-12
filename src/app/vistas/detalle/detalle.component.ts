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
  datallePokemon: Ability;



  constructor(private api: ApiService) {

  }

  ngOnInit(): void {

    this.api.detallePokedex(1).subscribe(data => {
      console.log('Detalle POKEDEX', data);
      this.datallePokemon = data;
      console.log('This detalle POKEDEX', this.datallePokemon);
    });
  }


  imgPokemon(id: number): string {
    //"https://pokeapi.co/api/v2/generation/3/
    return 'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png';
  }








}
