import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-status-player',
  templateUrl: './status-player.component.html',
  styleUrls: ['./status-player.component.css']
})
export class StatusPlayerComponent implements OnInit {
  game:number;
  name:string;
  position:string;
  errors:object;
  players:object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private Player:PlayerService
  ) { }

  ngOnInit() {
    this.getPlayers();
    this._route.params.subscribe(params => {
      this.game = params.game
  });
  }

  getPlayers(){
    this.Player.getPlayers().subscribe( data => this.players = data )
  }

  updatePlayer(id, status){
    if (this.game == 1){
      var update_Player = {'status1': status}
    } else if (this.game == 2){
      var update_Player = {'status2': status}
    } else {
      var update_Player = {'status3': status}
    }
    this.Player.updatePlayer(id, update_Player).subscribe( data => {
      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = [];
        this.getPlayers();
      }
    })
  }

}
