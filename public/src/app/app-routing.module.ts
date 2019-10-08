import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { StatusPlayerComponent } from './components/status-player/status-player.component';
import { StatusComponent } from './components/status/status.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent,
  children: [
    { path: 'list', component: ListPlayerComponent },
    { path: 'add', component: AddPlayerComponent }]
  },
  { path: 'status', component: StatusComponent,
  children: [
    { path: 'game/:game', component: StatusPlayerComponent }]
  },

  { path: '**', component:  ListPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
