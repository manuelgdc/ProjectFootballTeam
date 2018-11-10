import { Component, OnInit } from '@angular/core';
import {JugadoresService, Jugadores} from '../../services/jugadores.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
 
  jugadores:Jugadores[]=[];

  constructor(private _jugadoresServices:JugadoresService, private router:Router ) { }

  ngOnInit() {
    this.jugadores=this._jugadoresServices.getJugadores();
  }

  verJugador(index:number){
    this.router.navigate(['/jugador',index]);
  }

}
