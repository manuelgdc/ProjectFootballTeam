import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jugador-tarjeta',
  templateUrl: './jugador-tarjeta.component.html',
  styleUrls: ['./jugador-tarjeta.component.css']
})
export class JugadorTarjetaComponent implements OnInit {

  @Input() jugador:any={};
  @Input() index: number;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verJugador( ){
    this.router.navigate(['/jugador',this.index]);
  }

}
