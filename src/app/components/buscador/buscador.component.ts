import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; 
import { JugadoresService} from '../../services/jugadores.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  jugadores:any[]=[];
  termino:string;
  constructor(private activateRoute:ActivatedRoute, 
    private jugadoresServices: JugadoresService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params =>{
      this.termino=params['termino'];
      this.jugadores=this.jugadoresServices.buscarJugador(params['termino']);
    
    });
  }

}
