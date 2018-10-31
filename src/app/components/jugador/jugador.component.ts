import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{ JugadoresService} from '../../services/jugadores.service';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styles: []
})
export class JugadorComponent implements OnInit {

  jugador:any={};

  constructor( private activatedRoute: ActivatedRoute,
                private jugadoresService: JugadoresService
                ) { 

    this.activatedRoute.params.subscribe( params => {
      this.jugador = this.jugadoresService.getJugador(params['id?']);
    });
  }

  ngOnInit() {
  }

}
