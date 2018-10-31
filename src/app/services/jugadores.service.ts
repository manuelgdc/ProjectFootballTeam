import { Injectable } from '@angular/core';

@Injectable()
export class JugadoresService {

  private jugadores:Jugadores[]=[
    {
      nombre: "COURTOIS",
      bio: "...",    
      puesto: "PORTERO",
      img: "assets/img/COURTOIS.jpg",
      fecha: "1941-11-01",
      goles: 0
    },
    {
      nombre: "DANIEL",
      bio: "...",
      
      puesto: "DEFENSA - NÚMERO 4.",
      img: "assets/img/daniel.jpg",
      fecha: "1939-05-01",
      goles: 3
    },
    {
      nombre: "LUCAS VÁZQUEZ",
      bio: "....",
      
      puesto: " CENTROCAMPISTA",
      img: "assets/img/LUCAS.jpg",
      fecha: "1964-01-01",
      goles: 0
    },
    {
      nombre: "ISCO",
      bio: "...",
      
      puesto: "MEDIAPUNTA",
      img: "assets/img/ISCO.jpg",
      fecha: "1962-05-01",
      goles: 5
    },
    {
      nombre: "ASENSIO",
      bio: "....",
      
      puesto: "INTERIOR",
      img: "assets/img/ASENSIO.jpg",
      fecha: "1940-06-01",
      goles: 4
    },
    {
      nombre: "VINICIUS JUNIOR",
      bio: "....",
      
      puesto: "DELANTERO",
      img: "assets/img/VINICIUS.jpg",
      fecha: "1962-08-01",
      goles: 6
    }
  ];

  constructor() { 
   
  }

  getJugadores():Jugadores[]{
    return this.jugadores;
  }
  getJugador(id:string){
    return this.jugadores[id];
  }

  buscarJugador(termino:string){
    let jugadorArr:Jugadores[]=[];
    termino=termino.toLocaleLowerCase();
    for(let jugadores of this.jugadores){
      let nombre=jugadores.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        jugadorArr.push(jugadores)
      }
    }
    return jugadorArr;
  }

}

export interface Jugadores{
  nombre: string;
  bio:string;
  puesto:string;
  img:string;
  fecha:string;
  goles:number;
  id?:number;
};