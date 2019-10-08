import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { StatusPlayerComponent } from './components/status-player/status-player.component';
import { StatusComponent } from './components/status/status.component';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayerComponent,
    AddPlayerComponent,
    StatusPlayerComponent,
    StatusComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
