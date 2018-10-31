import { Injectable } from '@angular/core';

@Injectable()
export class JugadoresService {

  private jugadores:Jugadores[]=[
    {
      nombre: "COURTOIS",
      bio: "PORTERO",
      img: "assets/img/COURTOIS.jpg",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "DANIEL",
      bio: "DEFENSA - NÚMERO 4.",
      img: "assets/img/daniel.jpg",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "LUCAS VÁZQUEZ",
      bio: " CENTROCAMPISTA",
      img: "assets/img/LUCAS.jpg",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "ISCO",
      bio: "MEDIAPUNTA",
      img: "assets/img/ISCO.jpg",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "ASENSIO",
      bio: "INTERIOR",
      img: "assets/img/ASENSIO.jpg",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "VINICIUS JUNIOR",
      bio: "DELANTERO",
      img: "assets/img/VINICIUS.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel"
    }
  ];

  constructor() { 
   
  }

  getJugadores(){
    return this.jugadores;
  }
  getJugador(id:string){
    return this.jugadores[id];
  }

}

export interface Jugadores{
  nombre: string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}