import {RouterModule, Routes} from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {JugadoresComponent} from './components/jugadores/jugadores.component';
import {JugadorComponent} from './components/jugador/jugador.component';

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'jugadores', component: JugadoresComponent},
    {path: 'jugador/:id', component: JugadorComponent},
    {path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);