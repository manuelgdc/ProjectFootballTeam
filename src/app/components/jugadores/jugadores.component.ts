import { Component, OnInit } from '@angular/core';
import {JugadoresService, Jugadores} from '../../services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores:Jugadores[]=[];

  constructor(private _jugadoresServices:JugadoresService ) { }

  ngOnInit() {
    this.jugadores=this._jugadoresServices.getJugadores();
  }

}
