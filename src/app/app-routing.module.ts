import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { LoginComponent } from './login/login.component';

//modulo de navegacion. reglas de navegacion
// determina que componente atiende/responde a una determinada ruta

// ruta:componente que atiende esa ruta
const routes: Routes = [
  // { path: '', component:LoginComponent },
  { path: 'login',component:LoginComponent },
  { path: 'playlists', component:PlaylistListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
