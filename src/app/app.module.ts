import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//rutas
import  {app_routing} from './app.routes';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
//servicios
import {JugadoresService} from './services/jugadores.service';
import { JugadorComponent } from './components/jugador/jugador.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    JugadoresComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
